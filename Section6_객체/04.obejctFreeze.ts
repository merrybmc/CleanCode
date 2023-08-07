{
  // Object frezee
  interface ISTATUS {
    PENDING: string;
    SUCCESS: string;
    FAIL: string;
    OPTIONS: {
      GREEN: string;
      RED: string;
    };
  }

  const STATUS: ISTATUS = {
    PENDING: 'PENDING',
    SUCCESS: 'SUCCESS',
    FAIL: 'FAIL',
    OPTIONS: {
      GREEN: 'GREEN',
      RED: 'RED',
    },
  };

  STATUS.PENDING = 'P2';
  console.log(STATUS);

  STATUS.OPTIONS.GREEN = 'G';
  console.log(Object.isFrozen(STATUS.OPTIONS));

  console.log(STATUS);
}
