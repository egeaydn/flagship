// Type declarations for animejs v3.2.1
declare module 'animejs' {
  interface AnimeParams {
    targets?: string | HTMLElement | NodeList | HTMLElement[];
    [key: string]: any;
  }

  interface AnimeStagger {
    (value: number, options?: any): any;
  }

  interface AnimeInstance {
    (params: AnimeParams): any;
    stagger: AnimeStagger;
  }

  const anime: AnimeInstance;
  export default anime;
}
