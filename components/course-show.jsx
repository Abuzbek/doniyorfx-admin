import { Box, Label } from "@adminjs/design-system";
const Course = (props) => {
  const { record, property } = props;
  const value = record.params[property.name];
  const courses = ["DoniyorFX - mobilografiya", "MediaV2"];
  if (courses[value - 1]) {
    return (
      <Box style={{ marginBottom: 24 }}>
        <Label variant="light">Kurs</Label>
        {courses[value - 1]}
      </Box>
    );
  } else {
    return (
      <Box style={{ marginBottom: 24 }}>
        <Label variant="light">Kurs</Label>
        {value}
      </Box>
    );
  }
};

export default Course;
