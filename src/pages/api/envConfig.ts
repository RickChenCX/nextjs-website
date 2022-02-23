import { NextApiHandler } from "next";

const envConfig: NextApiHandler = async (req, res) => {
  const { NEXT_PUBLIC_API_BASE_URL, DOMAIN } = process.env;

  return res.json({
    NEXT_PUBLIC_API_BASE_URL,
    DOMAIN,
  });
};

export default envConfig;
