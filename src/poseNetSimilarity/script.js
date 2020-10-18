// score saving data structure
var scoreList = []; 

async function estimatePoseOnImage(imageElement) {
    // Load the posenet model from a checkpoint
    const net = await posenet.load();
    // Estimate the pose on the imageElement
    const pose = await net.estimateSinglePose(imageElement);
    return pose;
  }
  // here we can upload the video files or image files for comparison 

  
  const pose1ImageElement = document.getElementById('pose1');
  const pose2ImageElement = document.getElementById('pose2');
  
  Promise.all([
    estimatePoseOnImage(pose1ImageElement),
    estimatePoseOnImage(pose2ImageElement)
  ]).then(poses => {
    // Calculate the weighted distance between the two poses
    const weightedDistance = poseSimilarity(poses[0], poses[1]);
    scoreList.push(weightedDistance); // i switched from printing to saving it to the list 
    // console.log(weightedDistance)
  });