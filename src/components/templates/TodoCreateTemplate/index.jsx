import { CommonButton } from "../../atoms/CommonButton";
import { InputForm } from "../../atoms/InputForm";
import { TextArea } from "../../atoms/TextArea";

export const TodoCreateTemplate = () => {
  return (
    <form action="">
      <div>
        <InputForm />
      </div>
      <div>
        <TextArea />
      </div>
      <div>
        <CommonButton />
      </div>
    </form>
  );
};
