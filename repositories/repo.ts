import client from "../database/database.ts";
import { Game } from "../models/game.ts";

class repo {
  // Create 新增
  static async create(game: Game) {
    let result = await client.execute(
      `insert into games(name,price) values(?,?)`,
      [game.name, game.price],
    );

    game.id = Number(result.lastInsertId);

    return game;
  }
  // Update 更新
  static async update(game: Game) {
    let result = await client.execute(
      `update games set name = ?, price = ? where id = ?`,
      [game.name, game.price, game.id],
    );

    return game;
  }

  // 按ID查询
  static async findById(id: number) {
    const game = await client.query(`select * from games where id =?`, [id]);

    return game;
  }

  // 查询所有
  static async findAll() {
    const game = await client.query("select * from games");

    return game;
  }

  // 按ID删除
  static async deleteById(id: number) {
    let result = await client.execute(`delete from games where id = ?`, [id]);

    return true;
  }
}

export default repo;
