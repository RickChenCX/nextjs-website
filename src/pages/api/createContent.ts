import { NextApiHandler } from 'next'
import Filter from 'bad-words'
import { query } from '../../lib/db'

const filter = new Filter()

const handler: NextApiHandler = async (req, res) => {
  const { title, description, imgUrl } = req.body
  try {
    if (!title || !description || !imgUrl) {
      return res
        .status(400)
        .json({ message: '`title` and `description` and `imgUrl` are both required' })
    }

    const results = await query(
      `
      INSERT INTO content (title, description, imgUrl)
      VALUES (?, ?)
      `,
      [filter.clean(title), filter.clean(description), filter.clean(imgUrl)]
    )

    return res.json(results)
  } catch (e) {
    res.status(500).json({ message: (e as any).message })
  }
}

export default handler