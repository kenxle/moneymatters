import APP_CONFIG from '../../app.config';

export class Node implements d3.SimulationNodeDatum {
  // optional - defining optional implementation properties - required for relevant typing assistance
  index?: number;
  x?: number;
  y?: number;
  vx?: number;
  vy?: number;
  fx?: number | null;
  fy?: number | null;
  party?: String;
  active: boolean;

  id: string;
  linkCount: number = 0;

  constructor(id) {
    this.id = id;
  }



  get r() {
    return 5;
  }

  get fontSize() {
    return '5px';
  }

  get color() {
    if(!this.active){
      return 'black';
    }else{
      if(this.party.toLowerCase() == 'd'){
        return 'blue';
      }else{
        return 'red';
      }
    }
  }
}
