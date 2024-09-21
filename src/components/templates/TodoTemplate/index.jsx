import { InputForm } from "../../atoms/InputForm";
import { BaseLayout } from "../../organisms/BaseLayout";
import { TodoList } from "../../organisms/TodoList";

export const TodoTemplate = () => {
  return (
    <BaseLayout>
      <div>
        <div>
          <InputForm />
        </div>
        <div>
          <TodoList />
        </div>
      </div>
    </BaseLayout>
  );
};
