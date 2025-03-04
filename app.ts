import express from "express";
const app = express();
import auth from "./src/routes/auth";
import { AppDataSource } from "./src/config/data-source";
import { DataSource } from "typeorm";
import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import swaggerOptions from "./swagger";
import cors from "cors";
import bodyParser from "body-parser";
import activity from "./src/routes/activity";
import telegramBot from "node-telegram-bot-api";
import branch from "./src/routes/branch"
import { handleMessage } from "./src/service/telegram.service";
import Promotions from "./src/routes/promotion";
import coupon from "./src/routes/coupon";
import workoutPlan from "./src/routes/workout_plan";
import workout from "./src/routes/workout"
import { WorkoutPlan } from "./src/entity/workout_plan.entity";
import { Workout } from "./src/entity/workout.entity";
import { Exercise } from "./src/entity/exercise.entity";
import { Coupon } from "./src/entity/coupon.entity";
import { NewsAnnouncements } from "./src/entity/new.entity"
import { Branch } from "./src/entity/branch.entity";
import { Branch_Contact } from "./src/entity/branch_contact.entity";
import { Promotion } from "./src/entity/promotion.entity";
import {MembershipPlan} from "./src/entity/membership.entity"


// replace the value below with the Telegram token you receive from @BotFather
const token = process.env.TELEGRAM_TOKEN || "";

console.log(token);


var corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));

// Middleware setup
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // for form data
app.use(bodyParser.json());

// Swagger setup
const swaggerSpec = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Routes setuphttps://fboxmschac.sharedwithexpose.com
app.use("/api/auth", auth);
app.use("/api/activity", activity);
app.use("/api/promotion", Promotions);
app.use("/api/branch", branch);

app.use("/api/coupon", coupon);
app.use("/api/workout_plan", workoutPlan)
app.use("/api/workout", workout)

// Create a bot that uses 'polling' to fetch new updates
const bot = new telegramBot(token, { polling: true });

// Define the command list
const commands = [
  { command: "/start", description: "Start the bot and get command list" },
  { command: "/help", description: "Get help and usage instructions" },
  { command: "/news", description: "Send an news" },
  { command: "/options", description: "Send options" },
  { command: "/promotion", description: "See current promotions" },
  { command: "/workout_plan", description: "Send list" },
  { command: "/branch", description: "Send list of branch" },
  { command: "/coupon", description: "Send list of coupon" },
  { command: "/activity", description: "Send list of activity" },
  { command: "/membership", description: "Send list of membership" },
];

// Set bot commands in Telegram
bot
  .setMyCommands(commands)
  .then(() => console.log("Commands set successfully"));

// Handle /start command
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  let response = "Welcome! Here are the available commands:\n\n";
  commands.forEach((cmd) => {
    response += `${cmd.command} - ${cmd.description}\n`;
  });
  bot.sendMessage(chatId, response);
});

// Handle other commands
bot.onText(/\/help/, (msg) => {
  bot.sendMessage(
    msg.chat.id,
    "This bot allows you to access various features. Use /start to see available commands."
  );
});

bot.onText(/\/contact/, (msg) => {
  bot.sendMessage(msg.chat.id, "You can contact us at support@example.com.");
});

bot.onText(/\/promotion/, async (msg) => {
  const userRepo = AppDataSource.getRepository(Promotion);
  try {
    const promotions = await userRepo.find({
      order: { created_at: "DESC" }
    })
    if (promotions.length === 0) {
      return bot.sendMessage(msg.chat.id, "No branch found.");
    }
    for (const promotion of promotions) {
      const validUntilDate = new Date(promotion.valid_until);
      const formattedDate = validUntilDate.toLocaleDateString("en-US", {
        weekday: "short",  // e.g., "Mon"
        year: "numeric",   // e.g., "2025"
        month: "short",    // e.g., "Mar"
        day: "2-digit"     // e.g., "31"
      });
      const message = `🔥 *${promotion.title}* 🔥\n` +
        `💬 ${promotion.offer_description}\n` +
        `🎯 Discount: ${promotion.discount_percentage}%\n` +
        `⏳ Valid Until: ${formattedDate}\n`;

      if (promotion.img_url) {
        await bot.sendPhoto(msg.chat.id, promotion.img_url, { caption: message, parse_mode: "Markdown" });
      } else {
        await bot.sendMessage(msg.chat.id, message, { parse_mode: "Markdown" });
      }
    }
  } catch (err) {
    console.error("Error fetching branches", err)
    bot.sendMessage(msg.chat.id, "Failed to fetch branches. Please try again later.")
  }
});


bot.onText(/\/news/, async (msg) => {
  const userRepo = AppDataSource.getRepository(NewsAnnouncements);
  try {

    const newsList = await userRepo.find({
      order: { created_at: "DESC" }
    });

    if (newsList.length === 0) {
      return bot.sendMessage(msg.chat.id, "No news found.");
    }

    const newsText = newsList
      .map((item, index) =>
        `🔥 *News ${index + 1}* 🔥\n` +
        `🏷️ *${item.title}*\n` +
        `💬 ${item.content}\n` +
        `📍 *${item.location}*\n` +
        `📝 *${item.description}*\n` +
        `📢 *${item.message}*\n` +
        `📌 *Status:* ${item.status}\n` +
        `📅 *Published on:* ${item.published_date}`
      )
      .join('\n\n');

    const previewText = newsText.length > 900 ? newsText.substring(0, 900) + '...\n\n🔗 More news available.' : newsText;

    bot.sendPhoto(
      msg.chat.id,
      "https://picsum.photos/seed/picsum/200/300",
      { caption: previewText, parse_mode: "Markdown" }
    );
  } catch (err) {
    console.error("Error fetching news", err);
    bot.sendMessage(msg.chat.id, "Failed to fetch news. Please try again later.");
  }
});

bot.onText(/\/membership/, async (msg) => {
  const membershipRepo = AppDataSource.getRepository(MembershipPlan);
  try {
    const membershipList = await membershipRepo.find({
      order: { created_at: "DESC" }
    });

    if (membershipList.length === 0) {
      return bot.sendMessage(msg.chat.id, "No membership plans found.");
    }

    const membershipText = membershipList
      .map(
        (item, index) =>
          `🔥 *Plan ${index + 1}* 🔥\n` +
          `🏷️ *Price:* $${item.price}\n` +
          `⭐ *Features:*\n${(item.features ?? [])
            .map((feature) => `- ${feature}`)
            .join("\n")}`
      )
      .join("\n\n");
      console.log(membershipList)

    bot.sendMessage(msg.chat.id,`${membershipText}`);
  } catch (err) {
    console.error("Error fetching membership plans", err);
    bot.sendMessage(msg.chat.id, "Failed to fetch membership plans. Please try again later.");
  }
});

bot.onText(/\/branch/, async (msg) => {
  const userRepo = AppDataSource.getRepository(Branch);

  try {
    const branches = await userRepo.find({
      relations: {
        phone_numbers: true, // Assuming 'phone_numbers' is related to the branch
      },
      order: { id: "DESC" },
    });

    if (branches.length === 0) {
      return bot.sendMessage(msg.chat.id, "No branches found.");
    }

    // Create inline buttons for each branch
    const display = branches.map((branch) => [
      {
        text: `🔥 ${branch.name}`,
        callback_data: `branch_${branch.id}`, // Pass the branch ID
      },
    ]);

    bot.sendMessage(msg.chat.id, "Choose a Branch:", {
      reply_markup: {
        inline_keyboard: display,
      },
    });
  } catch (err) {
    console.error("Error fetching branches:", err);
    bot.sendMessage(msg.chat.id, "Failed to fetch branches. Please try again later.");
  }
});

bot.on("callback_query", async (callbackQuery) => {
  const msg = callbackQuery.message;
  const data = callbackQuery.data;

  if (!msg || !data) {
    return bot.sendMessage(callbackQuery.from.id, "Invalid selection. Please try again.");
  }

  console.log("Callback data received:", data); // Log the callback data for debugging

  if (data.startsWith("branch_")) {
    const branchId = data.replace("branch_", ""); // Extract the branch ID from the callback data
    console.log("Extracted branch ID:", branchId); // Log the branch ID for debugging

    const branchRepo = AppDataSource.getRepository(Branch);
    const contactRepo = AppDataSource.getRepository(Branch_Contact);

    try {
      // Fetch the branch using the branchId
      const branch = await branchRepo.findOne({
        where: { id: branchId }, // Query the branch by its ID
      });

      if (!branch) {
        console.log("Branch not found:", branchId);
        return bot.sendMessage(msg.chat.id, "Branch not found.");
      }

      const { name, location, image } = branch;

      // Send branch image, name, and location first
      if (image) {
        await bot.sendPhoto(msg.chat.id, image, {
          caption: `*${name}*\n\n📍 *Location:* ${location}`,
          parse_mode: "Markdown",
        });
      } else {
        // If no image, send the text description of the branch
        bot.sendMessage(msg.chat.id, `*${name}*\n\n📍 *Location:* ${location}`, {
          parse_mode: "Markdown",
        });
      }

      // Fetch contacts related to the branch
      const branch_contacts = await contactRepo.find({
        where: { branch: { id: branchId } }, // Ensure we query by branchId
        relations: ["branch"], // Load the branch relation
        order: { id: "ASC" }, // Order by id ascending
      });

      console.log("Fetched contacts:", branch_contacts); // Log fetched contacts for debugging

      if (branch_contacts.length === 0) {
        return bot.sendMessage(msg.chat.id, "No contacts found for this branch.");
      }

      // Prepare the contact list and include the phone number for each contact
      const contactsInfo = branch_contacts
        .map(
          (contact, index) =>
            `🎯 *${index + 1}. ${contact.branch.name}*\n` +
            `📞 *Phone:* ${contact.phone_number}\n` 
      
        )
        .join("\n");


      // Send the contact information
      bot.sendMessage(msg.chat.id, `📢 *Contacts in this branch:*\n\n${contactsInfo}`, {
        parse_mode: "Markdown",
      });

    } catch (err) {
      console.error("Error fetching branch or contacts:", err);
      bot.sendMessage(msg.chat.id, "Failed to fetch branch or contacts. Please try again later.");
    }
  }
});


bot.onText(/\/workoutplan/, async (msg) => {
  const userRepo = AppDataSource.getRepository(WorkoutPlan);
  try {
    const workout_plans = await userRepo.find({
      relations: {
        workouts: {
          exercises: true, // Load related exercises
        },
      },
      order: { id: "DESC" },
    });

    if (workout_plans.length === 0) {
      return bot.sendMessage(msg.chat.id, "No workout plans found.");
    }

    // Create inline buttons for each workout plan
    const display = workout_plans.map((workout_plan) => [
      {
        text: `🔥 ${workout_plan.name}`,
        callback_data: `workoutPlan_${workout_plan.id}`, // Ensure it matches in the callback query
      },
    ]);

    bot.sendMessage(msg.chat.id, "Choose a Workout Plan:", {
      reply_markup: {
        inline_keyboard: display,
      },
    });
  } catch (err) {
    console.error("Error fetching workout plans", err);
    bot.sendMessage(msg.chat.id, "Failed to fetch workout plans. Please try again later.");
  }
});

bot.on("callback_query", async (callbackQuery) => {
  const msg = callbackQuery.message;
  const data = callbackQuery.data;

  if (!msg || !data) {
    return bot.sendMessage(callbackQuery.from.id, "Invalid selection. Please try again.");
  }

  if (data.startsWith("workoutPlan_")) {
    const workoutPlanId = data.split("_")[1]; // Extract ID

    const workoutRepo = AppDataSource.getRepository(Workout);

    try {
      const workouts = await workoutRepo.find({
        where: { workoutPlan: { id: Number(workoutPlanId) } }, // Ensure proper relation query
        order: { id: "ASC" },
      });

      if (workouts.length === 0) {
        return bot.sendMessage(msg.chat.id, "No workouts found for this plan.");
      }

      // Create inline buttons for each workout
      const buttons = workouts.map((workout) => [
        {
          text: `💪 ${workout.name}`,
          callback_data: `workout_${workout.id}`, // Ensure consistency
        },
      ]);

      bot.sendMessage(msg.chat.id, `Workouts in this plan:`, {
        reply_markup: {
          inline_keyboard: buttons,
        },
      });
    } catch (err) {
      console.error("Error fetching workouts:", err);
      bot.sendMessage(msg.chat.id, "Failed to fetch workouts. Please try again later.");
    }
  }
});

bot.on("callback_query", async (callbackQuery) => {
  const msg = callbackQuery.message;
  const data = callbackQuery.data;

  if (!msg || !data) {
    return bot.sendMessage(callbackQuery.from.id, "Invalid selection. Please try again.");
  }

  if (data.startsWith("workout_")) {
    const workoutId = data.split("_")[1]; // Extract ID

    const workoutRepo = AppDataSource.getRepository(Exercise);

    try {
      const exercises = await workoutRepo.find({
        where: { workouts: { id: Number(workoutId) } }, // Ensure proper relation query
        order: { id: "ASC" },
      });

      if (exercises.length === 0) {
        return bot.sendMessage(msg.chat.id, "No exercises found for this plan.");
      }

      const buttons = exercises.map((exercise, index) =>
        `🔥 Exercise ${index + 1} 🔥\n` +
        `🏷️ *${exercise.id}*\n` +
        `💬 ${exercise.name}\n` +
        `🎯 set: ${exercise.sets}\n` +
        `⏳ calories_burned: ${exercise.calories_burned}\n` +
        `💪 weight: ${exercise.lbs}\n`
      ).join('\n\n\n');



      bot.sendMessage(msg.chat.id, `exercises in this plan:${buttons}`);
    } catch (err) {
      console.error("Error fetching workouts:", err);
      bot.sendMessage(msg.chat.id, "Failed to fetch workouts. Please try again later.");
    }
  }
});







bot.onText(/\/feedback/, (msg) => {
  bot.sendMessage(
    msg.chat.id,
    "Please send your feedback here, and we will review it."
  );
});

// Handle /image command
bot.onText(/\/image/, (msg) => {
  bot.sendPhoto(msg.chat.id, "https://picsum.photos/seed/picsum/200/300", {
    caption: "Here is an image for you\nNew Line abc\nkkjkj!",
  });
});

// Handle /text command
bot.onText(/\/text/, (msg) => {
  bot.sendMessage(msg.chat.id, "This is a sample text message.");
});

// Handle /link command
bot.onText(/\/coupon/, async (msg) => {
  const userRepo = AppDataSource.getRepository(Coupon);
  try {
    const coupons = await userRepo.find({
    })
    if (coupons.length === 0) {
      return bot.sendMessage(msg.chat.id, "No branch found.");
    }

    for (const coupon of coupons) {
      const validUntilDate = new Date(coupon.valid_until);
      const formattedDate = validUntilDate.toLocaleDateString("en-US", {
        weekday: "short",  // e.g., "Mon"
        year: "numeric",   // e.g., "2025"
        month: "short",    // e.g., "Mar"
        day: "2-digit"     // e.g., "31"
      });
      const message = `🎫 *${coupon.title}* 🎫\n` +
        `Offer: ${coupon.offer}\n` +
        ` Valid Until: ${formattedDate}\n` +
        ` Terms: ${coupon.terms}\n` +
        `🔥 Claim your free trial now & kickstart your fitness journey! 💪`;
      bot.sendPhoto(msg.chat.id, "https://res.cloudinary.com/duytuwd8w/image/upload/c_thumb,w_300/small_1_bb19429143", {
        caption: message, parse_mode: "Markdown" 
      });
    }
  } catch (err) {
    console.error("Error fetching workouts:", err);
    bot.sendMessage(msg.chat.id, "Failed to fetch coupon. Please try again later.");
  }
});

// Handle /list command
bot.onText(/\/list/, (msg) => {
  const list = "- Item 1\n- Item 2\n- Item 3\n- Item 4";
  bot.sendMessage(msg.chat.id, `Here is your list:\n${list}`);
});

// Handle /table command
bot.onText(/\/table/, (msg) => {
  const table = `
  <pre>
  | Tables   |      Are      |  Cool |
  |----------|:-------------:|------:|
  | col 1 is |  left-aligned | $1600 |
  | col 2 is |    centered   |   $12 |
  | col 3 is | right-aligned |    $1 |
  </pre>
  `;
  bot.sendMessage(msg.chat.id, `Here is a table:\n${table}`, {
    parse_mode: "HTML",
  });
});

// Listen for any kind of message. There are different kinds of
bot.on("message", (msg) => {
  try {
    const chatId = msg.chat.id;

    // send a message to the chat acknowledging receipt of their message
    const message = handleMessage(msg) || "";
    console.log("------ ", msg);
    if (message.length > 0) bot.sendMessage(chatId, message);
  } catch (err) {
    console.log(err);
  }
});

// Handle /options command with inline buttons
bot.onText(/\/options/, (msg) => {
  const chatId = msg.chat.id;
  const options = {
    reply_markup: {
      inline_keyboard: [
        [
          { text: "Option 1", callback_data: "option_1" },
          { text: "Option 2", callback_data: "option_2" },
        ],
        [{ text: "Option 3", callback_data: "option_3" }],
      ],
    },
  };
  bot.sendMessage(chatId, "Please select an option:", options);
});

// Handle callback queries from inline buttons
bot.on("callback_query", (callbackQuery) => {
  const msg = callbackQuery.message;
  if (msg) {
    bot.sendMessage(msg.chat.id, `You selected: ${callbackQuery.data}`);
    bot.answerCallbackQuery(callbackQuery.id);
  }
});

// Start server
const PORT = process.env.PORT || 3000;

AppDataSource.initialize()
  .then(async () => {
    console.log("Connection initialized with database...");
    app.listen(PORT, () => {
      console.log("Server is running on http://localhost:" + PORT);
    });
  })
  .catch((error) => console.log(error));

export const getDataSource = (delay = 3000): Promise<DataSource> => {
  if (AppDataSource.isInitialized) return Promise.resolve(AppDataSource);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (AppDataSource.isInitialized) resolve(AppDataSource);
      else reject("Failed to create connection with database");
    }, delay);
  });
};

export default app;