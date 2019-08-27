import * as mongoose from 'mongoose';
import validator from 'validator';
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      validate: {
        validator(name: any) {
          return validator.isAlpha(name);
        },
      },
      trim: true,
    },
    type: {
      type: String,
      enum: ['admin', 'employee', 'manager'],
      default: 'employee',
      validate: {
        validator(type: any) {
          return validator.isAlpha(type);
        },
      },
      required: true,
    },
    email: {
      type: String,
      unique: true,
      validate: {
        validator(email: any) {
          return validator.isEmail(email);
        },
      },
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
    useNestedStrict: true,
  },
);

export default mongoose.model('User', UserSchema);
