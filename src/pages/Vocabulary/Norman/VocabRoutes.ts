// import { Contents,Recalling,Mission,SessionWords,Sessions,Understanding,Descriptions, Usages, Using, Working } from ;

import { Contents } from "./Contents";
import { Descriptions } from "./Descriptions";
import { Mission } from "./Mission";
import { Recalling } from "./Recalling";
import { SessionWords } from "./SessionWords";
import { Sessions } from "./Sessions";
import { Understanding } from "./Understanding";
import { Usages } from "./Usages";
import { Using } from "./Using";
import { Working } from "./Working";

export const VocabRoutes=[
    {
        path: '/vocabulary/norman/contents',
        title: 'vocabulary',
        component: Contents,
      },
      {
        path: '/vocabulary/norman/mission',
        title: 'Missino',
        component: Mission,
      },{
        path: '/vocabulary/norman/sessionWords',
        title: 'sessionWords',
        component: SessionWords,
      },{
        path: '/vocabulary/norman/sessions',
        title: 'sessions',
        component: Sessions,
      },{
        path: '/vocabulary/norman/understanding',
        title: 'understanding',
        component: Understanding,
      },{
        path: '/vocabulary/norman/recalling',
        title: 'recalling',
        component: Recalling,
      },
      {
        path: '/vocabulary/norman/descriptions',
        title: 'recalling',
        component: Descriptions,
      },
      {
        path: '/vocabulary/norman/usages',
        title: 'recalling',
        component: Usages,
      },
      {
        path: '/vocabulary/norman/using',
        title: 'recalling',
        component: Using,
      },
      {
        path: '/vocabulary/norman/working',
        title: 'recalling',
        component: Working,
      },
]