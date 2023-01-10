import { NextPage } from "next";
import { FormData } from "../utils/formData";

interface UserProps {
  data: FormData;
  updateFieldHandler: (key: keyof FormData, value: string) => void;
}

const UserForm: NextPage<UserProps> = ({ data, updateFieldHandler }) => {
  return (
    <>
      <div className="form-control">
        <label htmlFor="name">Nome:</label>
        <input
          type="text"
          name="text"
          id="name"
          placeholder="Digite seu nome"
          value={data.name}
          onChange={(e) => updateFieldHandler("name", e.target.value)}
          required
        />
      </div>
      <div className="form-control">
        <label htmlFor="name">E-mail:</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Digite seu e-mail"
          value={data.email}
          onChange={(e) => updateFieldHandler("email", e.target.value)}
          required
        />
      </div>
    </>
  );
};

export default UserForm;
