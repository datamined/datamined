/**
 * Typescript module definition for the Ganache CLI
 * TODO flush out the rest of the API
 */
declare module 'ganache-cli' {
  export function provider(options?:any): string;
  export function server(options:any): any;
}
