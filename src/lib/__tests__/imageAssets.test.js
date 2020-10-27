import { URLS } from '../imageAssets';

describe('imageAssets', () => {
  const fighterName = 'mario';

  describe('fighter', () => {
    it('returns the image url for the fighter', () => {
      expect(URLS.fighter(fighterName)).toEqual(`https://ik.imagekit.io/ozcerk4wii/fighter/${fighterName}/main.png`);
    });

    it('returns the image url for the fighter in the specifed costume', () => {
      expect(URLS.fighter(fighterName, 8)).toEqual(`https://ik.imagekit.io/ozcerk4wii/fighter/${fighterName}/main8.png`);
    });
  });

  describe('fighterIcon', () => {
    it('returns the image url for the fighter icon', () => {
      expect(URLS.fighterIcon(fighterName)).toEqual(`https://ik.imagekit.io/ozcerk4wii/fighter/pict/${fighterName}.png`);
    });
  });

  describe('fighterMark', () => {
    it('returns the image url for the fighter mark', () => {
      expect(URLS.fighterMark(fighterName)).toEqual(`https://ik.imagekit.io/ozcerk4wii/fighter/${fighterName}/mark.svg`);
    });
  });

  describe('fighterName', () => {
    it('returns the image url for the fighter name', () => {
      expect(URLS.fighterName(fighterName)).toEqual(`https://ik.imagekit.io/ozcerk4wii/fighter/${fighterName}/fighter_name.svg`);
    });
  });

  describe('fighterNameSp', () => {
    it('returns the image url for the fighter name with number', () => {
      expect(URLS.fighterNameSp(fighterName)).toEqual(`https://ik.imagekit.io/ozcerk4wii/fighter/${fighterName}/fighter_name_sp.svg`);
    });
  });

  describe('fighterThumbnail', () => {
    it('returns the image url for the vertical fighter thumbnail', () => {
      expect(URLS.fighterThumbnail(fighterName)).toEqual(`https://ik.imagekit.io/ozcerk4wii/fighter/thumb_v/${fighterName}.png`);
    });
  });

  describe('fighterThumbnailIcon', () => {
    it('returns the image url for the fighter thumbnail', () => {
      expect(URLS.fighterThumbnailIcon(fighterName)).toEqual(`https://ik.imagekit.io/ozcerk4wii/fighter/thumb_a/${fighterName}.png`);
    });
  });

  describe('stage', () => {
    describe('standard stage', () => {
      it('returns the image url for a standard stage', () => {
        expect(URLS.stage(1)).toEqual('https://ik.imagekit.io/ozcerk4wii/stage/stage_img1.jpg');
      });
    });

    describe('dlc stage', () => {
      it('returns the image url for a dlc stage', () => {
        expect(URLS.stage(105, true)).toEqual('https://ik.imagekit.io/ozcerk4wii/stage/stage_addition_img2.jpg');
      });
    });
  });
});
