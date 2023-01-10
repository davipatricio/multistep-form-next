import { NextPage } from "next";
import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
} from "react-icons/bs";
import { FormData } from "../utils/formData";

import "./ReviewForm.scss";

interface ReviewFormProps {
  data: FormData;
  updateFieldHandler: (key: keyof FormData, value: string) => void;
}

const ReviewForm: NextPage<ReviewFormProps> = ({
  data,
  updateFieldHandler,
}) => {
  return (
    <div className="review-form">
      <div className="form-control score-container">
        <label className="radio-container">
          <input
            type="radio"
            value="unsatisfied"
            name="review"
            checked={data.review === "unsatisfied"}
            onChange={(e) => updateFieldHandler("review", e.target.value)}
            required
          />
          <BsFillEmojiFrownFill />
          <p>Insatisfeito</p>
        </label>

        <label className="radio-container">
          <input
            type="radio"
            value="neutral"
            name="review"
            checked={data.review === "neutral"}
            onChange={(e) => updateFieldHandler("review", e.target.value)}
            required
          />
          <BsFillEmojiNeutralFill />
          <p>Poderia ser melhor</p>
        </label>

        <label className="radio-container">
          <input
            type="radio"
            value="satisfied"
            name="review"
            checked={data.review === "satisfied"}
            onChange={(e) => updateFieldHandler("review", e.target.value)}
            required
          />
          <BsFillEmojiSmileFill />
          <p>Satisfeito</p>
        </label>

        <label className="radio-container">
          <input
            type="radio"
            value="very_satisfied"
            name="review"
            checked={data.review === "very_satisfied"}
            onChange={(e) => updateFieldHandler("review", e.target.value)}
            required
          />
          <BsFillEmojiHeartEyesFill />
          <p>Muito satisfeito</p>
        </label>
      </div>

      <div className="form-control">
        <label htmlFor="feedback">Comentário:</label>
        <textarea
          name="comment"
          id="comment"
          placeholder="Conte como foi a sua experiência com o produto..."
          value={data.comment}
          onChange={(e) => updateFieldHandler("comment", e.target.value)}
        ></textarea>
      </div>
    </div>
  );
};

export default ReviewForm;
