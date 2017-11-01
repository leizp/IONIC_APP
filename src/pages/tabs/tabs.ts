import { Component } from '@angular/core';

import { SpacePage } from '../space/space';
import { RecordPage } from '../record/record';
import { TreePage } from '../tree/tree';
import { ManagerPage } from '../manager/manager';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tabRoots:Object[];

  constructor() {
    this.tabRoots = [
      {
        root: RecordPage,
        tabTitle: '纪事',
        tabIcon: 'record'
      },
      {
        root: TreePage,
        tabTitle: '谱',
        tabIcon: 'tree'
      },
      {
        root: SpacePage,
        tabTitle: '家族空间',
        tabIcon: 'space'
      },
      {
        root: ManagerPage,
        tabTitle: '管理',
        tabIcon: 'manager'
      }
    ];
  }

}
