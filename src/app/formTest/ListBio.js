import DataBioItems from "@/app/formTest/DataBioItems";

const ListBio = (props) => {
  return (
    <div className="grid grid-cols-4 gap-1">
      {props.dataListElements.map((item) => (
        <DataBioItems key={item.id} {...item} />
      ))}
    </div>
  );
};

export default ListBio;
