import { InputForm } from "../../atoms/InputForm";
import { TextArea } from "../../atoms/TextArea";
import { BaseLayout } from "../../organisms/BaseLayout";

export const TodoDetailTemplate = () => {
  return (
    <>
      <div>
        <InputForm />
      </div>
      <div>
        <TextArea />
      </div>
    </>
  );
};
