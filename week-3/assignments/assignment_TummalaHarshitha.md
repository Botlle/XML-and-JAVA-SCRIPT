VALIDATION IMAGES ARE UNDER week-3/assignments/images/assignmentDTDvalidation.png
week-3/assignments/images/assignmentXSDvalidation.png

ATTACHED THE IMAGES BELOW


![image info](/week-3/assignments/images/assignmentXSDvalidation.png)

![image info](/week-3/assignments/images/assignmentDTDvalidation.png)




4. Explain your thought process for these 2 declarations

DTD EXPLANATION



DTD is a document type definition

There are different elements and attributes in the given XML file

Elements are both complex and simple

Created DTD for both elements and attributes , given #REQUIRED for the tags which are mandatory

There is an ERROR while validating the DTD, i have attached image.


XSD EXPLANATION

XSD stands for XML schema definition 

PURPOSE
the elements and attributes in XML file
the number of  child elements
data types for elements and attributes


we need to define simple and complex elements of a XML file in XSD in a different way

Complex elements can be elements that have child elements or have attributes

FOr example in the given example(assignment.xml)

catalog_item is a complex item becuase it has child elements and attribute (gender)

we need to define XSD with element and it's datatype

Example: <xs:element name="item_number" type="xs:string" />

In the above example item_number is a  element and it's datatype is string

Example:<xs:attribute name="image" type="xs:string" use="required" />

In the above example attribute name is image which is for color_swatch element and it's datatype is string use is required .

Difference between DTD and XSD

DTD has less contorl over XML where as XSD has more.XSD is a way used to describe the structure and content of XML.XSD has a capability to use and create datatypes in schema of a element and attribute declarations.