import { AutoComplete } from "../components/AutoComplete"
import { Stocklist } from "../components/Stocklist"
import trading from "..images/Trading.png"

export const StockOverviewPage = () =>{
    return <div>
        <div className="text-center">
        < img src={trading} />
        </div>
        <AutoComplete />
        <Stocklist />
    </div>
}
