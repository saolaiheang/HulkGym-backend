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
