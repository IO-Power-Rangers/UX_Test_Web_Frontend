import { CanDeactivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface ComponentCanDeactivate {
  canDeactivate: () => boolean | Observable<boolean>;
}

@Injectable()
export class PendingChangesGuard implements CanDeactivate<ComponentCanDeactivate> {
  canDeactivate(component: ComponentCanDeactivate): boolean | Observable<boolean> {

    return component.canDeactivate() ?
      true :
      confirm('WARNING: You haven\'t saved this test yet, make sure you know what you\'re doing.\n' +
        'Press OK if you want to leave without saving it.');
  }
}


