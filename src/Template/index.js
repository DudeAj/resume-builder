import Simple from "./simple/simple";
import Colorful from "./colorful/colorful";
import Peach from "./peach/peach";
import {useSelector} from 'react-redux';
const SelectedTemplate = (id) => {
  const data = useSelector((state) =>state.data)
  switch (id) {
    case 1:
      return {
        id: 1,
        name: "Simple",
        temp: <Simple data={data}/>,
      };

    case 2:
      return {
        id: 2,
        name: "Colorful",
        temp: <Colorful data={data}/>,
      };

    case 3:
      return {
        id: 3,
        name: "Peach",
        temp: <Peach data={data}/>,
      };
    default:
      return {
        id: 1,
        name: "Default",
        temp: <Simple data={data}/>,
      };
  }
};

export default SelectedTemplate;
