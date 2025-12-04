interface Props {
    title: string;
    description: string;
}
const ServiceCard = ({title,description}:Props) => {
  return(
  <div className="p-8 bg-gray-100 rounded-xl shadow">
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-gray-600">
      {description}
    </p>
  </div>
  )
};
export default ServiceCard;