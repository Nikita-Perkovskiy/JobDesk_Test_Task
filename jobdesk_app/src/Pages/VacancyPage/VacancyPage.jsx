import "./index.scss";
import JobCard from "../../UI_components/JobCard/JobCard";
import VacancyDescription from "../../UI_components/VacancyDescription/VacancyDescription";

const VacancyPage = ({
  targetVacantion,
  addFav,
  delFav,
  starDefolt,
  addTarg,
}) => {
  //console.log(" targetVacantion in VacansyPage", targetVacantion);

  return (
    <>
      <main className="vacancyPage-fon">
        <section className="vacancyPage-wrapper">
          <JobCard
            postId={targetVacantion.id}
            postProfeesion={targetVacantion.profession}
            postType={targetVacantion.type_of_work.title}
            postPayTo={targetVacantion.payment_to}
            postPayFrom={targetVacantion.payment_from}
            postCurr={targetVacantion.currency}
            postLocation={targetVacantion.town.title}
            addFav={addFav}
            delFav={delFav}
            starDefolt={starDefolt}
            addTarg={addTarg}
          />
          <VacancyDescription
            targetVacantionVacancyRichText={targetVacantion.vacancyRichText}
          />
        </section>
      </main>
    </>
  );
};

export default VacancyPage;
