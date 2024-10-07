import { useState } from "react";

import VocabularyNavigations from "../layout/Navigations/VocabularyNavingation";
import Sidebar from "./Sidebar";

const Navigate = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);
  return (
    <div>
        {/* <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/> */}
        <VocabularyNavigations sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
    </div>
  )
}

export default Navigate