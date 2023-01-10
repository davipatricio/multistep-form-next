import { NextPage } from "next";
import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
} from "react-icons/bs";
import { FormData, ProductReview } from "../utils/formData";

import "./Thanks.scss";

interface ThanksFormProps {
  data: FormData;
}

const emojiData = {
  neutral: <BsFillEmojiNeutralFill />,
  satisfied: <BsFillEmojiSmileFill />,
  unsatisfied: <BsFillEmojiFrownFill />,
  very_satisfied: <BsFillEmojiHeartEyesFill />,
} as Record<ProductReview, JSX.Element>;

const ThanksForm: NextPage<ThanksFormProps> = ({ data }) => {
  return (
    <div className="thanks-container">
      <h2>Falta pouco...</h2>
      <p>
        A sua opinião é muito importante, em breve você receberá um cupom de 10%
        de desconto para a sua próxima compra conosco!
      </p>
      <p>Para concluir sua avaliação, clique no botão Enviar abaixo.</p>
      <h3>Aqui está o resumo de sua avaliação:</h3>
      <p className="review-data">
        <span>Satisfação com o produto:  </span>
        {emojiData[data.review]}
      </p>
      <p className="review-data">
        <span>Comentário:  </span>
        {data.comment || "Nenhum comentário."}
      </p>
    </div>
  );
};

export default ThanksForm;
