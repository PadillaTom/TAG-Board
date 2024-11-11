import {ChartSpline} from "lucide-react";

const LandingPage = ()=> {
    return (
        <div className="h-full flex items-center justify-around flex-col">
            <div className="flex items-center justify-around flex-col" >
                <div className="flex items-center border shadow-sm py-4 px-8 bg-amber-100 text-amber-700 rounded-full">
                    <ChartSpline className="h-6 w-6 mr-2"></ChartSpline>
                    TAG Board
                </div>
            </div>
        </div>
    )
}

export default LandingPage;