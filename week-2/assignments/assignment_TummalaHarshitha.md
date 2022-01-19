1. Open `week-2/assignments/assignment.xml` in your browser. Are there any errors? Explain the error and fix it.

Error :Attribute name "Date" associated with an element type "effective" must be followed by the ' = ' character.

Error image attached below

![image info](/week-2/assignments/images/errorimage.png)

Rectified the error changed effectiveDate element in assignment.xml and re-validated the file.

After error rectification , image attached below

![image info](/week-2/assignments/images/errorfree.png)

2. What is the use of CDATA block in this document?

CDATA is a chracter data and treated as pure data content.CDATA section is a block of text that XML treats as character data only.A CDATA section may contain most markup characters, such as <, >and &

CDATA section in assignment.xml is treated as character data.CDATA section in assignment.xml is treated as regular text with no markup.

3. Add comment line to the end of file which contains you name and student id.

 <!--
    Name:Tummala Harshitha
    Student_id:N01490310
  -->
  Modified assignment.xml as well with required changes.

4. Identify prolog, document body, and epilog in the document. Are there any processing instructions?

prolog in the document

<?xml version="1.0" encoding="UTF-8" standalone="yes" ?>


document body

Information which is in between the following tag  in assignment.xml is treated as document body
<menuInfo> </menuInfo>

epilog 

Epilog contains any final comments or processing instructions

Epilog in assignment.xml

  <!--
    Name:Tummala Harshitha
    Student_id:N01490310
  -->

processing instruction in assignment.xml


<?xml-stylesheet type="text/css" href="style.css"?>

5. Add inline DTD for this document.

<!DOCTYPE menuInfo 
[
  <!ELEMENT menuInfo (title, summary,effectiveDate, menu+)>
  <!ELEMENT menu (category, menuItem+)>
  <!ELEMENT menuItem (itemName,description,price,indicator*)>
  <!ELEMENT itemName (originalName, oldName*)>
  <!ELEMENT title (#PCDATA)>
  <!ELEMENT summary (#PCDATA)>
  <!ELEMENT effectiveDate (#PCDATA)>
  <!ELEMENT category (#PCDATA)>
  <!ELEMENT originalName (#PCDATA)>
  <!ELEMENT oldName (#PCDATA)>
  <!ELEMENT description (#PCDATA)>
  <!ELEMENT price (#PCDATA)>
  <!ELEMENT indicator (#PCDATA)>
]>
6. Verify that file is well-formed and valid.

Attached image of validation

![image info](/week-2/assignments/images/revalidatedfile.png)

7. Create `style.css` file and link it to the file. Add the following styles to the .css:

- Change font-size of `originalName`
- Display each `category` on the new line
- Add any other css-rule


originalName {
  font-size: 14px;
}

* {
  display: block;
}

title{
  color:red;
  font-weight: bold;
}
updated styles.css accordingly 

updated assignment.xml and styles.css



