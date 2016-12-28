import {Progress} from "../model/Progress";

export class ProgressTrackerService {

  private _progress = new Map<string, Progress>();

  getProgress(path: string): Progress {
    return this._progress.get(path);
  }

}
