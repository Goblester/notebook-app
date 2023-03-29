import { filterContext } from "../../store/contexts/filterContext"
import { Filter } from "./filter"


const WrapperComponent = () => {
  return (
    <filterContext.Provider value={['test', jest.fn()]}>
      <Filter />
    </filterContext.Provider>
  )
}


describe('<Filter />', () => {
  it.todo('should render current filter value');
  it.todo('should call context callback function on input click');
})