{
  interface Options {
    margin: number;
    center: boolean;
    navElement: string;
  }

  function createCarousel(options: Options): Options {
    options = options || {};
    {
    }
    let margin = options.margin || 0;
    let center = options.center || false;
    let navElement = options.navElement || 'div';

    return {
      margin,
      center,
      navElement,
    };
  }

  function createCarousel({ margin = 0, center = false, navElement = 'div' }: Options): Options {
    return {
      margin,
      center,
      navElement,
    };
  }

  createCarousel();
}
