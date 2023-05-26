import DataBioItems from "@/app/formTest/DataBioItems";

const ListBio = ({ dataListElements, removeHandler }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-5">
      {dataListElements.map((item) => (
        <DataBioItems removeHandler={removeHandler} key={item.id} {...item} />
      ))}
    </div>
  );
};

export default ListBio;
