import { Model, DataTypes } from "sequelize";
import sequelize from "../database";

class Review extends Model {
  id!: number;
  rating!: number;
  comment!: string;
}

Review.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    rating: {
      type: DataTypes.FLOAT(2, 1),
      validate: {
        min: 1.0,
        max: 5.0,
      },
    },
    comment: {
      type: DataTypes.STRING(500),
    },
  },
  {
    sequelize,
    modelName: "Review",
    tableName: "reviews",
    updatedAt: false,
    timestamps: true,
  }
);

export default Review;
