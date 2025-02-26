INSERT INTO public.membership_plan (
    id, plan_name, price, features, created_at, updated_at
)
VALUES (
    uuid_generate_v4(), 
    'HULK BOOST', 
    40.00, 
    '{✅ Everything in HULK STARTER, ✅ Unlimited group workout classes, ✅ Monthly body composition analysis, ✅ Sauna & recovery zone access}',
    CURRENT_TIMESTAMP, 
    CURRENT_TIMESTAMP
);
INSERT INTO public.membership_plan (
    id, plan_name, price, features, created_at, updated_at
)
VALUES (
    uuid_generate_v4(), 
    'HULK PRO" – For Dedicated Warriors!', 
    60.00, 
    '{🔥 Features: ✅ 24/7 Gym Access,

✅ 2 free personal training sessions per month,

✅ Group workout classes (Yoga, HIIT, Strength Training),

✅ Nutrition guidance & meal planning tips}',
    CURRENT_TIMESTAMP, 
    CURRENT_TIMESTAMP
);
INSERT INTO public.membership_plan (
    id, plan_name, price, features, created_at, updated_at
)
VALUES (
    uuid_generate_v4(), 
    '"HULK BOOST" – Train Harder, Get Stronger!', 
    20.00, 
    '{🔥 Features: ✅ Access to gym facilities (off-peak hours), ✅ 1 free fitness consultation, ✅ Basic strength & cardio equipment, ✅ Locker & shower access}',
    CURRENT_TIMESTAMP, 
    CURRENT_TIMESTAMP
);


INSERT INTO public.membership_plan (
    id, plan_name, price, features, created_at, updated_at
)
VALUES (
    uuid_generate_v4(), 
    'HULK ELITE" – The Ultimate Fitness Experience!', 
    99.00, 
    '{✅ All benefits from **HULK PRO**,

✅ 4 personal training sessions per month,

✅ VIP access to premium equipment & private workout zones,

✅ Free protein shakes after workouts,

✅ Priority booking for special gym events}',
    CURRENT_TIMESTAMP, 
    CURRENT_TIMESTAMP
);
