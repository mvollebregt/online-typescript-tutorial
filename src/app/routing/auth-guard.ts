import {RouterStateSnapshot, ActivatedRouteSnapshot, CanActivate, Router} from "@angular/router";
import {Injectable} from "@angular/core";
import {NavigationService} from "../services/navigation.service";
import {ProgressTrackerService} from "../services/progress-tracker.service";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router,
              private navigationService: NavigationService,
              private progressTrackerService: ProgressTrackerService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let predecessor = this.navigationService.predecessor(route.data['page'].path);
    if (predecessor) {
      let progress = this.progressTrackerService.getProgress(predecessor.path);
      if (!progress || !progress.success) {
        this.router.navigate(['/']);
        return false;
      }
    }
    return true;
  }
}
