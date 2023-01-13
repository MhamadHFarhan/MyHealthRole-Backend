const mongoose = require("mongoose");

const { Schema } = mongoose;

const HospitalesSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
    },
    address: {
      type: String,
    },
    phone: {
      type: String,
    },
    email: {
      type: String,
    },
    clinics: [{ type: Schema.Types.ObjectId, ref: "Clinics" }],
    closed: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Hospitales", HospitalesSchema);
