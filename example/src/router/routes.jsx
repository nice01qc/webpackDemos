import AntOfMenu from "../containers/AntOfMenu";
import EchartsOfBar from "../containers/EchartsOfBar";

const routes = [
	{
		path: '/ant',
		chunk: () => AntOfMenu,
	},{
		path: '/echarts/:type',
		chunk: () => EchartsOfBar,
	},
	
]

export default routes
