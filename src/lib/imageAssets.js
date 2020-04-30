const smashAssets = 'https://www.smashbros.com/assets_v2/img';
const fighterAssets = `${smashAssets}/fighter`;

export const URLS = {
  fighter: (name, costumeId = 1) => {
    const costume = costumeId !== 1 ? `${costumeId}` : '';
    return `${fighterAssets}/${name}/main${costume}.png`
  },
  fighterAlt: (name) => this.fighter(name, 8),
  // The icon url sometimes require the fighter name to be japanese
  fighterIcon: (name) => `${fighterAssets}/pict/${name}.png`,
  fighterMark: (name) => `${fighterAssets}/${name}/mark.svg`,
  fighterName: (name) => `${fighterAssets}/${name}/fighter_name.svg`,
  fighterNameSp: (name) => `${fighterAssets}/${name}/fighter_name_sp.svg`,
  // The thumbnail urls sometimes require the fighter name to be japanese
  fighterThumbnail: (name) => `${fighterAssets}/thumb_v/${name}.png`,
  fighterThumbnailIcon: (name) => `${fighterAssets}/thumb_a/${name}.png`,
  stage: (stageId, dlc = false) => {
    const id = dlc ? stageId - 103 : stageId;
    const addition = dlc ? 'addition_' : '';
    return `${smashAssets}/stage/stage_${addition}img${id}.jpg`
  },
};

export default URLS;
