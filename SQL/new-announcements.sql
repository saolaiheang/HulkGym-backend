INSERT INTO public.news_announcements(
    id, title, content, location, description, created_at, updated_at, message, status, published_at)
VALUES 
(
    uuid_generate_v4(), 
    '3️⃣ Social Media Challenge – Win a 1-Month Free Membership! 📱🏆', 
    'Join our #HulkTransformation Challenge by posting your workout photos or videos using Hulk Gym’s facilities. The top 3 most engaging posts will win a FREE 1-month membership! 📌 How to join: 1️⃣ Follow @HulkGymKH on Facebook & Instagram. 2️⃣ Post a workout photo/video & tag us. 3️⃣ Use the hashtag #HulkTransformation. 💪 Get ready to showcase your fitness journey and win big!',
    'Online – Facebook & Instagram (@HulkGymKH)', 
    'Social media challenge for Hulk Gym followers to win a free 1-month membership by posting workout content with the hashtag #HulkTransformation.', 
    CURRENT_TIMESTAMP, 
    CURRENT_TIMESTAMP, 
    NULL, 
    TRUE, 
    '2025-03-01 00:00:00'
);
INSERT INTO public.news_announcements(
    id, title, content, location, description, created_at, updated_at, message, status, published_at)
VALUES 
(
    uuid_generate_v4(), 
    'Hulk Gym Fitness Workshop at AEON Supermarket 🏋️‍♀️', 
    'Hulk Gym is bringing fitness to you! Visit our booth at AEON Mall for an interactive fitness workshop where our trainers will teach quick, effective workouts for busy lifestyles. Try out live demos, join mini-challenges, and get special membership deals exclusive to the event! 🎁 Bonus: The first 50 participants will receive a FREE Hulk Gym workout towel!', 
    'AEON Mall Phnom Penh', 
    'Interactive fitness workshop at AEON Mall with special membership deals and free workout towels for the first 50 participants.', 
    CURRENT_TIMESTAMP, 
    CURRENT_TIMESTAMP, 
    NULL, 
    TRUE, 
    '2025-03-15 00:00:00'
);
INSERT INTO public.news_announcements(
    id, title, content, location, description, created_at, updated_at, message, status, published_at)
VALUES 
(
    uuid_generate_v4(), 
    'Hulk Gym Open House – Try for Free! 🎉', 
    'Ever wanted to experience Hulk Gym before signing up? Now’s your chance! Join us for an exclusive Open House where you can try our facilities for FREE for one day. Get access to top-notch equipment, professional trainers, and special discounts on memberships. 👉 Don’t miss out! Bring a friend and train together.', 
    'All Hulk Gym branches', 
    'Exclusive Open House to try Hulk Gym facilities for free on March 10, 2025.', 
    CURRENT_TIMESTAMP, 
    CURRENT_TIMESTAMP, 
    NULL, 
    TRUE, 
    '2025-03-10 00:00:00'
);
