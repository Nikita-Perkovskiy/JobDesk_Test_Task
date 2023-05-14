import "./index.scss";
import LinkButton from "../LinkButton/LinkButton";
import LookingPeople from "./svges/LookingPeople/LookingPeople";

const EmptyState = () => {
  return (
    <>
      <div className="emptyState-wrapper">
        <section className="emptyState-content">
          <LookingPeople />
          <h3 className="emptyState__title">Упс, здесь еще ничего нет!</h3>
          <div className="emptyState__button-wrapper">
            <LinkButton />
          </div>
        </section>
      </div>
    </>
  );
};

export default EmptyState;
