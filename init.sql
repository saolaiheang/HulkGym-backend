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
	--  ('','',2,'')
	-- Squats – 6 sets, 8-12 reps (~80-120 calories)
-- 

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
	VALUES ( 'Strength & Power Training 💪',2 ),
	('Upper Body – Arms & Shoulders 💥',2),
	('Forearms & Grip Strength 🏆',2),
	('Core & Conditioning 🏃‍♂️🔥',2),


INSERT INTO public.exercise(
	 name, sets, "workoutsId", calories_burned,lbs)
	 VALUES ( ' Squats', '3 sets', 4, '10 reps (~40-60 calories)','95lbs'),
	 ('Two-Hand Curl','3 sets',4,'8 reps (~35-50 calories),'70-80 lbs'),
	 ('Push-Up','3 sets',4,'10 reps (~25-40 calories)',' bodyweight'),
	 ('French Press 1 ','4 sets',5,'6 reps (~30-45 calories)','64 lbs'),
	 ('French Press 2 ','4 sets',5,'6 reps (~30-45 calories)','64 lbs'),
	 ('Incline Curl','4 sets',5,'6 reps (~25-35 calories)','35 lbs'),
	 ('Con Curl ','4sets',5,'6 reps (6 reps (~30-45 calories)','35 lbs'),
	 ('Reverse Curl ','4 sets',6,'6 reps (~30-45 calories)','65 lbs'),
	 ('Wrist Curl 1 ','4 sets',6,'10 reps (~15-25 calories)','infinite weight'),
	 ('Wrist Curl 2 ','4 sets',6,'10 reps (~15-25 calories)',' infinite weight'),
	 ('Sit-Up ','5 sets',7,'12 reps (~20-35 calories)','bodyweight'),
	 ('Calf Raise ','5 sets',7,'20 reps (~20-30 calories)','bodyweight')



	 