const express = require('express');
const router = express.Router();
const generatePalette = require('./generatePalette');
const Project = require('./models/Project');
const Palette = require('./models/Palette');

//get all the projects
router.get('/projects', (req, res) => {
  Project.find({})
    .populate('palettes')
    .exec()
    .then( folders => res.json(folders));
});

//generate the palette
router.get('/generatePalette', (req, res) => {
  const palette = generatePalette();
  //use this to populate palette picker colors component
  res.json({palette});
});

//add project
router.post('/addProject', async (req, res) => {
  const project = new Project(req.body);
  const data = await project.save();
  res.json(data);
});

//add palette and add to the specific project
router.post('/addPalette', async (req, res) => {
  //mimick palette choice
  // const paletteGen = generatePalette();
  // const obj = {
  //   palettes: paletteGen, //will come from req
  //   name: 'My third Palette' //will come from req
  // }

  console.log('[BODY]', req.body);
  const obj = {
    palettes: req.body.colors,
    name: req.body.name
  }


  const palette = new Palette(obj);
  const data = await palette.save();
  // now get the specific Project to add the palette to
  Project.findById(req.body.projectId, async(err, project) => {
    console.log('[PROJECT]', project);
    project.palettes.push(data.id);
    const result = await project.save();
    res.json(result);
  });
});

//remove the palette and remove it off the project
router.delete('/remove/:projectId/:paletteId', (req, res) => {
  const { paletteId, projectId } = req.params;

  //remove palette
  Palette.findById(paletteId, async (err, palette) => {
    await palette.remove();
    //remove palette from Folder
    Project.findById(projectId, async (err, project) => {
      if(project.palettes.length === 1) {
        project.palettes.splice(0,1);
      } else {
        const pos = project.palettes.indexOf(paletteId);
        project.palettes.splice(pos, 1);
      }
      const result = await project.save();
      res.json(result)
    });
  });
})

module.exports = router;