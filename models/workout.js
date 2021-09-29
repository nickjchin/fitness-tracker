const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    // For the schema of this attribute, define type and default
    type: Date,
    default: () => new Date(),
  },
  exercises: [
    // Schema for each item in exercises array
    {
      type: {
        // TODO: For the schema of this attribute, define type and trim and required
        type: String,
        trim: true,
        required: "Enter the type of exercise",
      },
      name: {
        // TODO: For the schema of this attribute, define type and trim and required
        type: String,
        trim: true,
        required: "Enter the exercise's name",
      },
      duration: {
        // TODO: For the schema of this attribute, define type as number and its required
        type: Number,
        required: "Enter duration of the exercise",
      },
      weight: {
        // TODO: For the schema of this attribute, define type as number
        type: Number,
      },
      reps: {
        // TODO: For the schema of this attribute, define type as number
        type: Number,
      },
      sets: {
        // TODO: For the schema of this attribute, define type as number
      },
      distance: {
        // TODO: For the schema of this attribute, define type as number
      },
    },
  ],
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
