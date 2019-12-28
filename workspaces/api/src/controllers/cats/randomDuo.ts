import { RequestHandler } from 'express';
import Cat, { ICat } from '../../models/Cat';

const randomDuo: RequestHandler = async (_, res) => {
  const catsLength = await Cat.count({});

  // get two random cats which are not equals
  const getRandomDuo = async (): Promise<[ICat, ICat]> => {
    const generateRandomNumber = () => Math.floor(Math.random() * catsLength);

    const firstNumber = generateRandomNumber();
    const secondNumber = generateRandomNumber();

    if (firstNumber !== secondNumber) {
      const firstCat = await Cat.findOne().skip(firstNumber);
      const secondCat = await Cat.findOne().skip(secondNumber);

      if (firstCat && secondCat) return [firstCat, secondCat];
    }

    return getRandomDuo();
  };

  const pickedDuo = await getRandomDuo();

  res.send(pickedDuo);
};

export default randomDuo;
