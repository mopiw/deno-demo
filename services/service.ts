import { Game } from "../models/game.ts";
import repo from "../repositories/repo.ts";

class service {
  static async create(game: Game) {
    return repo.create(game);
  }

  static async update(game: Game) {
    return repo.update(game);
  }

  static async findById(id: number) {
    return repo.findById(id);
  }

  static async findAll() {
    return repo.findAll();
  }

  static async deleteById(id: number) {
    return repo.deleteById(id);
  }
}

export default service;
