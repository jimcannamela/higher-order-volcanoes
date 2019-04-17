const volcanoes = require('./volcano.json');
const VolcanoAnalyzer = require('./volcano');

const log = jest.spyOn(console, 'log').mockImplementation(() => {});

// ? allows instructors to return or console.log while live-coding
const captureResult = (func, ...args) => {
  const result = func(...args);
  return log.mock.calls[0] ? log.mock.calls[0][0] : result;
};

const VA = new VolcanoAnalyzer();

describe('VolcanoAnalyzer', () => {
  beforeEach(() => {
    log.mockClear();
  });
  it('should list volcanoes that erupted in the 80s', () => {
    expect(captureResult(VA.eruptedInEighties)).toMatchSnapshot();
  });

  it('should list volcanoes that have a high VEI', () => {
    expect(captureResult(VA.highVEI)).toMatchSnapshot();
  });

  it('should print/return the most deadly volcano', () => {
    expect(captureResult(VA.mostDeadly)).toMatchSnapshot();
  });

  it('should calculate percentage of volcanoes that caused tsunamis', () => {
    expect(captureResult(VA.causedTsunami)).toMatchSnapshot();
  });

  it('should determine the most common type of volcano in the list', () => {
    expect(captureResult(VA.mostCommonType)).toMatchSnapshot();
  });

  it('should filter eruptions by country', () => {
    expect(captureResult(VA.highVEI, 'Italy')).toMatchSnapshot('Italy');
    expect(captureResult(VA.highVEI, 'Philippines')).toMatchSnapshot('Phillipines');
    expect(captureResult(VA.highVEI, 'Nicaragua')).toMatchSnapshot('Nicaragua');
  });

  it('should determine the average elevation', () => {
    expect(captureResult(VA.averageElevation)).toMatchSnapshot();
  });

  it('should list the unique types of volcanoes', () => {
    expect(captureResult(VA.volcanoTypes)).toMatchSnapshot();
  });

  it('should list northern hemisphere eruptions', () => {
    expect(captureResult(VA.percentNorth)).toMatchSnapshot();
  });

  it('should list eruptions that meet many criteria', () => {
    // Return names of eruptions that occurred after 1800, that did not cause a tsunami, happened in the Southern hemisphere, and had a VEI of 5.

    expect(captureResult(VA.manyFilters)).toMatchSnapshot();
  });

  it('should list volcanoes that happened above a specified altitude', () => {
    expect(captureResult(VA.elevatedVolcanoes, 1000)).toMatchSnapshot('1000');
    expect(captureResult(VA.elevatedVolcanoes, 5000)).toMatchSnapshot('5000');
    expect(captureResult(VA.elevatedVolcanoes, 10000)).toMatchSnapshot('10000');
  });

  it('should normalize and list the top 10 causes of death', () => {
    expect(captureResult(VA.elevatedVolcanoes)).toMatchSnapshot();
  });
});
