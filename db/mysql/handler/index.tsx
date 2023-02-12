import SqlConnection from "../connection"
import { IUserToken } from "../model"

export const TokenHandler = async (token: string | string[], username?: string | string[]): Promise<{ resultsToken: IUserToken, error: boolean }> => {
  const connection = await SqlConnection()
  let values: { resultsToken: IUserToken, error: boolean } = {
    resultsToken: {
      constructor: {
        name: 'RowDataPacket'
      },
      id: 0,
      username: "",
      password: "",
      token: ""
    },
    error: false
  }
  const query = username ? `SELECT * FROM users_token WHERE username = '${username}'` : `SELECT * FROM users_token WHERE token = '${token}'`
  try {
    const resultsToken = await connection.query<IUserToken[]>(query)
    if (!resultsToken[0]?.[0]?.id) {
      values.error = true
    } else {
      values.resultsToken = resultsToken[0]?.[0]
    }
  } catch (error) {
    values.error = true
  }
  return values
}