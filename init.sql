INSERT INTO public.workout_plan(
	 name)
	VALUES ( 'Arnold Schwarzenegger’s Classic Workout Plan');

INSERT INTO public.workout_plan(
	 name)
	VALUES ( '🏋️ Bruce Lee Inspired Workout Plan');
    INSERT INTO public.workout_plan(
	 name)
	VALUES ( '🏋️‍♀️ Gal Gadot Inspired Workout Plan  ');
    INSERT INTO public.workout_plan(
	 name)
	VALUES ( '🏋️‍♀️ Full-Body Functional Fitness Plan');



    INSERT INTO public.exercise(
	 name, sets, "workoutsId", calories_burned)
	VALUES ( 'Bench Press', '5 sets', 1, ' 8-12 reps (~70-100 calories)'),
	('ncline Bench Press ','4 sets',1,'8-12 reps (~60-85 calories)'),
	('Pull-Ups',' 4 sets',1,'10-12 reps (~40-60 calories)'),
	('Bent-Over Barbell Rows','4 sets',1,'8-12 reps (~60-90 calories)'),
	('Dumbbell Flys','3 sets',1,'10 reps (~40-55 calories)'),
	('Lat Pulldown','4 sets',1,'8-12 reps (~50-75 calories)')


	 INSERT INTO public.exercise(
	 name, sets, "workoutsId", calories_burned)
	 VALUES ( ' Barbell Curl', '5 sets', 2, '8-12 reps (~40-60 calories)'),
	 ('Seated Dumbbell Press','5 sets',2,'8-12 reps (~50-75 calories)'),
	 ('Skull Crushers (Lying Triceps Extensions)','4 sets',2,'8-12 reps (~40-60 calories)'),
	 ('Dumbbell Lateral Raise','4 sets',2,'10-12 reps (~35-55 calories)'),
	 ('Preacher Curls','4 sets',2,' 8-12 reps (~40-60 calories)'),
	 ('Cable Triceps Pushdowns','4 sets',2,'10 reps (~30-45 calories)')
	
 INSERT INTO public.exercise(
	 name, sets, "workoutsId", calories_burned)
	 VALUES ( ' Squats', '6 sets', 3, '8-12 reps (~80-120 calories)'),
	 ('Leg Press','5 sets',3,'810-12 reps (~70-100 calories)'),
	 ('Skull Crushers (Lying Triceps Extensions)','4 sets',3,'8-12 reps (~40-60 calories)'),
	 ('Leg Curls','4 sets',3,'10 reps (~40-60 calories)'),
	 ('Standing Calf Raises','5 sets',3,' 15 reps (~30-50 calories)'),
	 ('Seated Calf Raises','5 sets',3,'15 reps (~30-50 calories)'),
	 ('Hanging Leg Raise','4 sets',3,'15 reps (~30-50 calories)')

INSERT INTO public.workout(
	 name, "workoutPlanId")
	VALUES('Chest & Back (Push-Pull Power) 🔥',2 ),
        ('Arms & Shoulders 💪',2),
        ( 'Legs & Core 🏋️‍♂️' ,2)

INSERT INTO public.workout(
	 name, "workoutPlanId")
	VALUES ( 'Strength & Power Training 💪',3),
	('Upper Body – Arms & Shoulders 💥',3),
	('Forearms & Grip Strength 🏆',3),
	('Core & Conditioning 🏃‍♂️🔥',3),
	INSERT INTO public.workout(name, "workoutPlanId")
VALUES 
    ('Strength Training (Full Body) 💪', 4),
    ('Core & Conditioning 🏋️', 4),
    ('Upper Body & Arms 💥', 4),
    ('Cardio & Conditioning 🏃‍♂️🔥', 4),
    ('Cool Down & Stretching 🧘', 4)


	INSERT INTO public.workout (name, "workoutPlanId") 
VALUES 

('Strength & Power 💪', 5),
('Core & Stability 🏋️‍♂️', 5),
('Endurance & Cardio 🏃‍♂️🔥', 5),
('Cool Down & Mobility 🧘', 5)



INSERT INTO public.exercise(
	 name, sets, "workoutsId", calories_burned,lbs)
	 VALUES ( ' Squats', '3 sets', 4, '10 reps (~40-60 calories)','95lbs'),
	 ('Two-Hand Curl','3 sets',4,'8 reps (~35-50 calories)','70-80 lbs'),
	 ('Push-Up','3 sets',4,'10 reps (~25-40 calories)',' bodyweight'),
	 ('French Press 1 ','4 sets',5,'6 reps (~30-45 calories)','64 lbs'),
	 ('French Press 2 ','4 sets',5,'6 reps (~30-45 calories)','64 lbs'),
	 ('Incline Curl','4 sets',5,'6 reps (~25-35 calories)','35 lbs'),
	 ('Con Curl ','4sets',5,'6 reps (~30-45 calories)','35 lbs'),
	 ('Reverse Curl ','4 sets',6,'6 reps (~30-45 calories)','65 lbs'),
	 ('Wrist Curl 1 ','4 sets',6,'10 reps (~15-25 calories)','infinite weight'),
	 ('Wrist Curl 2 ','4 sets',6,'10 reps (~15-25 calories)',' infinite weight'),
	 ('Sit-Up ','5 sets',7,'12 reps (~20-35 calories)','bodyweight'),
	 ('Calf Raise ','5 sets',7,'20 reps (~20-30 calories)','bodyweight')







INSERT INTO public.exercise(name, sets, "workoutsId", calories_burned, lbs)
VALUES 
    ('Deadlifts', '4 sets', 8, '50-70 calories', NULL),
    ('Squats', '4 sets', 8, '60-80 calories', NULL),
    ('Push-Ups', '3 sets', 8, '25-40 calories', 'Bodyweight'),
    ('Pull-Ups', '3 sets', 8, '30-50 calories', 'Bodyweight'),
    
    ('Plank', '3 sets', 9, '20-30 calories', NULL),
    ('Russian Twists', '3 sets', 9, '25-35 calories', NULL),
    ('Leg Raises', '4 sets', 9, '20-35 calories', NULL),

    ('Dumbbell Shoulder Press', '4 sets', 10, '30-45 calories', '15-25 lbs'),
    ('Tricep Dips', '4 sets', 10, '20-30 calories', NULL),
    ('Bicep Curls', '4 sets', 10, '25-40 calories', '15-25 lbs'),

    ('Box Jumps', '3 sets', 11, '40-60 calories', NULL),
    ('Sprints', '4 sets', 11, '40-60 calories', NULL),

    ('Yoga/Stretching Routine', '10-15 minutes', 12, '20-30 calories', NULL)




INSERT INTO public.exercise (name, sets, "workoutsId", calories_burned) 
VALUES 
('Squats', '4 sets', 13, '10 reps (~60-80 calories)'),
('Deadlifts', '4 sets', 13, '8 reps (~70-90 calories)'),
('Push-Ups', '3 sets', 13, '15 reps (~30-45 calories)'),
('Pull-Ups', '3 sets', 13, '10 reps (~40-60 calories)'),
('Dumbbell Shoulder Press', '3 sets', 13, '10 reps (~30-50 calories)'),

('Plank Hold', '3 sets', 14, '1 minute (~20-30 calories)'),
('Russian Twists', '3 sets', 14, '20 reps (~25-35 calories)'),
('Leg Raises', '4 sets', 14, '12 reps (~20-35 calories)'),
('Bicycle Crunches', '3 sets', 14, '20 reps (~25-40 calories)'),

('Jump Rope', '3 rounds', 15, '1 minute (~80-100 calories)'),
('Box Jumps', '3 sets', 15, '10 reps (~40-60 calories)'),
('Sprints', '4 sets', 15, '30 seconds on/30 seconds off (~50-70 calories)'),
('Burpees', '3 sets', 15, '12 reps (~50-70 calories)'),

('Yoga/Stretching Routine', '10-15 minutes', 16, '(~20-30 calories)')

	 

	 INSERT INTO public.branch(
  name, location, phone_number, image
) VALUES (
  'Toul Kork Branch', 
  'Street 289, Toul Kork, Phnom Penh', 
  '096 888 1234', 
  'https://res.cloudinary.com/dzimzklgj/image/upload/c_thumb,w_400/Hulk Gym/zixly4y31kqccea7kloq'
);

INSERT INTO public.branch(
  name, location, phone_number, image
) VALUES (
  'BKK1 Branch', 
  'Street 51, Boeung Keng Kang 1, Phnom Penh', 
  '010 567 889', 
  'https://res.cloudinary.com/dzimzklgj/image/upload/c_thumb,w_400/Hulk Gym/dcdf341wy2kxqunny22m'
);

INSERT INTO public.branch_contact(
	phone_number, "branchId")
	VALUES ('096 888 1234', '749102d0-bf1f-4076-96e4-ce1356b576b2');

SELECT b.id, p.phone_number,b.name,b.location
FROM branch b
JOIN branch_contact p ON  b.id=p."branchId" 
WHERE b.id = '749102d0-bf1f-4076-96e4-ce1356b576b2';


INSERT INTO public.branch_contact(
	phone_number, "branchId")
	VALUES ('010 567 889', 'eb22fa00-90d0-4c01-85ba-7b1b9469c0da');
	VALUES ('092 111 3344', 'eb22fa00-90d0-4c01-85ba-7b1b9469c0da');
	VALUES ('098 777 6543', '59f1339a-fb1e-4ab1-8bf6-0415660359a0');
	VALUES ('015 222 9988', '59f1339a-fb1e-4ab1-8bf6-0415660359a0');
  VALUES ('097 123 4567', 'bb6eed91-7076-4f07-b658-a8dbb6e04948');
	VALUES ('011 888 2233', 'bb6eed91-7076-4f07-b658-a8dbb6e04948');
  VALUES ('093 999 1122', 'bb6eed91-7076-4f07-b658-a8dbb6e04948');
	VALUES ('069 333 5544', 'bb6eed91-7076-4f07-b658-a8dbb6e04948');


UPDATE branch_contact 
SET "branchId" = 'b06f1dcc-3526-485f-b45d-c2562669ab39' 
WHERE ID = 'df4e3690-1241-4adc-9333-5b714be285d6';
