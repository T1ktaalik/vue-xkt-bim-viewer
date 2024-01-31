/**
 * @private
 */
const IFCElementDescriptions = {
  IfcActionRequest:
    'A request is the act or instance of asking for something, such as a request for information, bid submission, or performance of work.',
  IfcActor:
    'The IfcActor defines all actors or human agents involved in a project during its full life cycle. It facilitates the use of person and organization definitions in the resource part of the IFC object model. This includes name, address, telecommunication addresses, and roles.',
  IfcActorRole:
    'This entity indicates a role which is performed by an actor, either a person, an organization or a person related to an organization.',
  IfcActuator:
    'An actuator is a mechanical device for moving or controlling a mechanism or system. An actuator takes energy, usually created by air, electricity, or liquid, and converts that into some kind of motion.',
  IfcActuatorType:
    'The distribution control element type IfcActuatorType defines commonly shared information for occurrences of actuators. The set of shared information may include:',
  IfcAddress: 'This abstract entity represents various kinds of postal and telecom addresses.',
  IfcAdvancedBrep:
    'An advanced B-rep is a boundary representation model in which all faces, edges and vertices are explicitly represented. It is a solid with explicit topology and elementary or free-form geometry. The faces of the B-rep are of type IfcAdvancedFace. An advanced B-rep has to meet the same topological constraints as the manifold solid B-rep.',
  IfcAdvancedBrepWithVoids:
    'The IfcAdvancedBrepWithVoids is a specialization of an advanced B-rep which contains one or more voids in its interior. The voids are represented as closed shells which are defined so that the shell normal point into the void.',
  IfcAdvancedFace:
    'An advanced face is a specialization of a face surface that has to meet requirements on using particular topological and geometric representation items for the definition of the faces, edges and vertices.',
  IfcAirTerminal:
    'An air terminal is a terminating or origination point for the transfer of air between distribution system(s) and one or more spaces. It can also be used for the transfer of air between adjacent spaces.',
  IfcAirTerminalBox:
    'An air terminal box typically participates in an HVAC duct distribution system and is used to control or modulate the amount of air delivered to its downstream ductwork. An air terminal box type is often referred to as an "air flow regulator".',
  IfcAirTerminalBoxType:
    'The flow controller type IfcAirTerminalBoxType defines commonly shared information for occurrences of air terminal boxes. The set of shared information may include:',
  IfcAirTerminalType:
    'The flow terminal type IfcAirTerminalType defines commonly shared information for occurrences of air terminals. The set of shared information may include:',
  IfcAirToAirHeatRecovery:
    'An air-to-air heat recovery device employs a counter-flow heat exchanger between inbound and outbound air flow. It is typically used to transfer heat from warmer air in one chamber to cooler air in the second chamber (i.e., typically used to recover heat from the conditioned air being exhausted and the outside air being supplied to a building), resulting in energy savings from reduced heating (or cooling) requirements.',
  IfcAirToAirHeatRecoveryType:
    'The energy conversion device type IfcAirToAirHeatRecoveryType defines commonly shared information for occurrences of air to air heat recoverys. The set of shared information may include:',
  IfcAlarm:
    'An alarm is a device that signals the existence of a condition or situation that is outside the boundaries of normal expectation or that activates such a device.',
  IfcAlarmType:
    'The distribution control element type IfcAlarmType defines commonly shared information for occurrences of alarms. The set of shared information may include:',
  IfcAnnotation:
    'An annotation is an information element within the geometric (and spatial) context of a project, that adds a note or meaning to the objects which constitutes the project model. Annotations include additional points, curves, text, dimensioning, hatching and other forms of graphical notes. It also includes virtual or symbolic representations of additional model components, not representing products or spatial structures, such as event elements, survey points, contour lines or similar.',
  IfcAnnotationFillArea:
    'The IfcAnnotationFillArea defines an area by a definite OuterBoundary, that might include InnerBoundaries. The areas defined by the InnerBoundaries are excluded from applying the fill area style. The InnerBoundaries shall not intersect with the OuterBoundary nor being outside of the OuterBoundary.',
  IfcApplication:
    'IfcApplication holds the information about an IFC compliant application developed by an application developer. The IfcApplication utilizes a short identifying name as provided by the application developer.',
  IfcAppliedValue:
    'This entity captures a value driven by a formula, with additional qualifications including unit basis, valid date range, and categorization.',
  IfcApproval:
    'An IfcApproval represents information about approval processes such as for a plan, a design, a proposal, or a change order in a construction or facilities management project. IfcApproval is referenced by IfcRelAssociatesApproval in IfcControlExtension schema, and thereby can be related to all subtypes of IfcRoot. An approval may also be given to resource objects using IfcResourceApprovalRelationship',
  IfcApprovalRelationship:
    'An IfcApprovalRelationship associates approvals (one relating approval and one or more related approvals), each having different status or level as the approval process or the approved objects evolve.',
  IfcArbitraryClosedProfileDef:
    'The closed profile IfcArbitraryClosedProfileDef defines an arbitrary two-dimensional profile for the use within the swept surface geometry, the swept area solid or a sectioned spine. It is given by an outer boundary from which the surface or solid can be constructed.',
  IfcArbitraryOpenProfileDef:
    'The open profile IfcArbitraryOpenProfileDef defines an arbitrary two-dimensional open profile for the use within the swept surface geometry. It is given by an open boundary from which the surface can be constructed.',
  IfcArbitraryProfileDefWithVoids:
    'The IfcArbitraryProfileDefWithVoids defines an arbitrary closed two-dimensional profile with holes. It is given by an outer boundary and inner boundaries. A common usage of IfcArbitraryProfileDefWithVoids is as the cross section for the creation of swept surfaces or swept solids.',
  IfcAsset:
    'An asset is a uniquely identifiable grouping of elements acting as a single entity that has a financial value or that can be operated on as a single unit.',
  IfcAsymmetricIShapeProfileDef:
    "IfcAsymmetricIShapeProfileDef defines a section profile that provides the defining parameters of a singly symmetric I-shaped section. Its parameters and orientation relative to the position coordinate system are according to the following illustration. The centre of the position coordinate system is in the profile's centre of the bounding box.",
  IfcAudioVisualAppliance:
    'An audio-visual appliance is a device that displays, captures, transmits, or receives audio or video.',
  IfcAudioVisualApplianceType:
    'The flow terminal type IfcAudioVisualApplianceType defines commonly shared information for occurrences of audio visual appliances. The set of shared information may include:',
  IfcAxis1Placement: 'The IfcAxis1Placement provides location and direction of a single axis.',
  IfcAxis2Placement2D:
    'The IfcAxis2Placement2D provides location and orientation to place items in a two-dimensional space. The attribute RefDirection defines the x axis, the y axis is derived. If the attribute RefDirection is not given, the placement defaults to P[1] (x-axis) as [1.,0.] and P[2] (y-axis) as [0.,1.].',
  IfcAxis2Placement3D:
    'The IfcAxis2Placement3D provides location and orientations to place items in a three-dimensional space. The attribute Axis defines the Z direction, RefDirection the X direction. The Y direction is derived.',
  IfcBeam:
    'An IfcBeam is a horizontal, or nearly horizontal, structural member that is capable of withstanding load primarily by resisting bending. It represents such a member from an architectural point of view. It is not required to be load bearing.',
  IfcBeamStandardCase:
    'The standard beam, IfcBeamStandardCase, defines a beam with certain constraints for the provision of material usage, parameters and with certain constraints for the geometric representation. The IfcBeamStandardCase handles all cases of beams, that:',
  IfcBeamType:
    'The element type IfcBeamType defines commonly shared information for occurrences of beams. The set of shared information may include:',
  IfcBlobTexture:
    'An IfcBlobTexture provides a 2-dimensional distribution of the lighting parameters of a surface onto which it is mapped. The texture itself is given as a single binary blob, representing the content of a pixel format file. The file format of the pixel file is given by the RasterFormat attribute and allowable formats are guided by where rule SupportedRasterFormat.',
  IfcBlock:
    'The IfcBlock is a Construction Solid Geometry (CSG) 3D primitive. It is defined by a position and a positve distance along the three orthogonal axes. The inherited Position attribute has the IfcAxisPlacement3D type and provides:',
  IfcBoiler:
    'A boiler is a closed, pressure-rated vessel in which water or other fluid is heated using an energy source such as natural gas, heating oil, or electricity. The fluid in the vessel is then circulated out of the boiler for use in various processes or heating applications.',
  IfcBoilerType:
    'The energy conversion device type IfcBoilerType defines commonly shared information for occurrences of boilers. The set of shared information may include:',
  IfcBooleanClippingResult:
    'A clipping result is defined as a special subtype of the general IfcBooleanResult. It constrains the operands and the operator of the Boolean result.',
  IfcBooleanResult:
    'The IfcBooleanResult is the result of applying a Boolean operation to two operands being solids.',
  IfcBoundaryCondition:
    'The abstract entity IfcBoundaryCondition is the supertype of all boundary conditions that can be applied to structural connection definitions, either directly for the connection (e.g. the joint) or for the relation between a structural member and the connection.',
  IfcBoundaryCurve: 'An IfcBoundaryCurve defines a curve acting as the boundary of a surface.',
  IfcBoundaryEdgeCondition:
    'Describes linearly elastic support conditions or connection conditions.',
  IfcBoundaryFaceCondition:
    'Describes linearly elastic support conditions or connection conditions.',
  IfcBoundaryNodeCondition:
    'Describes linearly elastic support conditions or connection conditions.',
  IfcBoundaryNodeConditionWarping:
    'Describes linearly elastic support conditions or connection conditions, including linearly elastic warping restraints.',
  IfcBoundedCurve: 'An IfcBoundedCurve is a curve of finite length.',
  IfcBoundedSurface: 'An IfcBoundedSurface is a surface of finite area.',
  IfcBoundingBox:
    'The IfcBoundingBox defines an orthogonal box oriented parallel to the axes of the object coordinate system in which it is defined. It is defined by a Corner being a three-dimensional Cartesian point and three length measures defining the X, Y and Z parameters of the box in the direction of the positive axes.',
  IfcBoxedHalfSpace:
    'The IfcBoxedHalfSpace is used (as its supertype IfcHalfSpaceSolid) only within Boolean operations. It divides the domain into exactly two subsets, where the domain in question is that of the attribute Enclosure.',
  IfcBSplineCurve: 'The IfcBSplineCurve is a spline curve parameterized by spline functions.',
  IfcBSplineCurveWithKnots:
    'The IfcBSplineCurveWithKnots is a spline curve parameterized by spline functions for which the knot values are explicitly given.',
  IfcBSplineSurface:
    'The IfcBSplineSurface is a general form of rational or polynomial parametric surface.',
  IfcBSplineSurfaceWithKnots:
    'The IfcBSplineSurfaceWithKnots is a general form of rational or polynomial parametric surface in which the knot values are explicitly given.',
  IfcBuilding:
    'A building represents a structure that provides shelter for its occupants or contents and stands in one place. The building is also used to provide a basic element within the spatial structure hierarchy for the components of a building project (together with site, storey, and space).',
  IfcBuildingElementPart:
    'IfcBuildingElementPart represents major components as subordinate parts of a building element. Typical usage examples include precast concrete sandwich walls, where the layers may have different geometry representations. In this case the layered material representation does not sufficiently describe the element. Each layer is represented by an own instance of the IfcBuildingElementPart with its own geometry description.',
  IfcBuildingElementPartType:
    'The building element part type defines lists of commonly shared property set definitions and representation maps of parts of a building element.',
  IfcBuildingElementProxy:
    'The IfcBuildingElementProxy is a proxy definition that provides the same functionality as subtypes of IfcBuildingElement, but without having a predefined meaning of the special type of building element, it represents.',
  IfcBuildingElementProxyType:
    'IfcBuildingElementProxyType defines a list of commonly shared property set definitions of a building element proxy and an optional set of product representations. It is used to define an element specification (i.e. the specific product information, that is common to all occurrences of that product type).',
  IfcBuildingStorey:
    'The building storey has an elevation and typically represents a (nearly) horizontal aggregation of spaces that are vertically bound.',
  IfcBuildingSystem:
    'A building system is a group by which building elements are grouped according to a common function within the facility.',
  IfcBurner:
    'A burner is a device that converts fuel into heat through combustion. It includes gas, oil, and wood burners.',
  IfcBurnerType:
    'The energy conversion device type IfcBurnerType defines commonly shared information for occurrences of burners. The set of shared information may include:',
  IfcCableCarrierFitting:
    'A cable carrier fitting is a fitting that is placed at junction or transition in a cable carrier system.',
  IfcCableCarrierFittingType:
    'The flow fitting type IfcCableCarrierFittingType defines commonly shared information for occurrences of cable carrier fittings. The set of shared information may include:',
  IfcCableCarrierSegment:
    'A cable carrier segment is a flow segment that is specifically used to carry and support cabling.',
  IfcCableCarrierSegmentType:
    'The flow segment type IfcCableCarrierSegmentType defines commonly shared information for occurrences of cable carrier segments. The set of shared information may include:',
  IfcCableFitting:
    'A cable fitting is a fitting that is placed at a junction, transition or termination in a cable system.',
  IfcCableFittingType:
    'The flow fitting type IfcCableFittingType defines commonly shared information for occurrences of cable fittings. The set of shared information may include:',
  IfcCableSegment:
    'A cable segment is a flow segment used to carry electrical power, data, or telecommunications signals.',
  IfcCableSegmentType:
    'The flow segment type IfcCableSegmentType defines commonly shared information for occurrences of cable segments. The set of shared information may include:',
  IfcCartesianPoint:
    'An IfcCartesianPoint defines a point by coordinates in an orthogonal, right-handed Cartesian coordinate system. For the purpose of this specification only two and three dimensional Cartesian points are used.',
  IfcCartesianPointList: 'The IfcCartesianPointList is the abstract supertype of list of points.',
  IfcCartesianPointList2D:
    'The IfcCartesianPointList2D defines an ordered collection of two-dimentional Cartesian points. Each Cartesian point is provided as an two-dimensional point by a fixed list of two coordinates. The attribute CoordList is a two-dimensional list, where',
  IfcCartesianPointList3D:
    'The IfcCartesianPointList3D defines an ordered collection of three-dimentional Cartesian points. Each Cartesian point is provided as an three-dimensional point by a fixed list of three coordinates. The attribute CoordList is a two-dimensional list, where',
  IfcCartesianTransformationOperator:
    'An IfcCartesianTransformationOperator defines an abstract supertype of different kinds of geometric transformations.',
  IfcCartesianTransformationOperator2D:
    'An IfcCartesianTransformationOperator2D defines a geometric transformation in two-dimensional space.',
  IfcCartesianTransformationOperator2DnonUniform:
    'A Cartesian transformation operator 2d non uniform defines a geometric transformation in two-dimensional space composed of translation, rotation, mirroring and non uniform scaling. Non uniform scaling is given by two different scaling factors:',
  IfcCartesianTransformationOperator3D:
    'An IfcCartesianTransformationOperator defines a geometric transformation in three-dimensional space.',
  IfcCartesianTransformationOperator3DnonUniform:
    'A Cartesian transformation operator 3d non uniform defines a geometric transformation in three-dimensional space composed of translation, rotation, mirroring and non uniform scaling. Non uniform scaling is given by three different scaling factors:',
  IfcCenterLineProfileDef:
    'The profile IfcCenterLineProfileDef defines an arbitrary two-dimensional open, not self intersecting profile for the use within the swept solid geometry. It is given by an area defined by applying a constant thickness to a centerline, generating an area from which the solid can be constructed.',
  IfcChiller:
    'A chiller is a device used to remove heat from a liquid via a vapor-compression or absorption refrigeration cycle to cool a fluid, typically water or a mixture of water and glycol. The chilled fluid is then used to cool and dehumidify air in a building.',
  IfcChillerType:
    'The energy conversion device type IfcChillerType defines commonly shared information for occurrences of chillers. The set of shared information may include:',
  IfcChimney:
    'Chimneys are typically vertical, or as near as vertical, parts of the construction of a building and part of the building fabric. Often constructed by pre-cast or insitu concrete, today seldom by bricks.',
  IfcChimneyType:
    'The building element type IfcChimneyType defines commonly shared information for occurrences of chimneys. The set of shared information may include:',
  IfcCircle:
    'An IfcCircle is a curve consisting of a set of points having equal distance from the center.',
  IfcCircleHollowProfileDef:
    "IfcCircleHollowProfileDef defines a section profile that provides the defining parameters of a circular hollow section (tube) to be used by the swept area solid. Its parameters and orientation relative to the position coordinate system are according to the following illustration.The centre of the position coordinate system is in the profile's centre of the bounding box (for symmetric profiles identical with the centre of gravity).",
  IfcCircleProfileDef:
    'IfcCircleProfileDef defines a circle as the profile definition used by the swept surface geometry or by the swept area solid. It is given by its Radius attribute and placed within the 2D position coordinate system, established by the Position attribute.',
  IfcCivilElement:
    "An IfcCivilElement is a generalization of all elements within a civil engineering works that cannot be represented as BuildingElements, DistributionElements or GeographicElements. Depending on the context of the construction project, included building work, such as buildings or factories, are represented as a collection of IfcBuildingElement's, distribution systems, such as piping or drainage, are represented as a collection of IfcDistributionElement's, and other geographic elements, such as trees, light posts, traffic signs etc. are represented as IfcGeographicElement's.",
  IfcCivilElementType:
    "An IfcCivilElementType is used to define an element specification of an element used within civil engineering works. Civil element types include for different types of element that may be used to represent information for construction works external to a building. IfcCivilElementType's may include:",
  IfcClassification:
    'An IfcClassification is used for the arrangement of objects into a class or category according to a common purpose or their possession of common characteristics. A classification in the sense of IfcClassification is taxonomy, or taxonomic scheme, arranged in a hierarchical structure. A category of objects relates to other categories in a generalization-specialization relationship. Therefore the classification items in an classification are organized in a tree structure.',
  IfcClassificationReference:
    'An IfcClassificationReference is a reference into a classification system or source (see IfcClassification) for a specific classification key (or notation).',
  IfcClosedShell: '',
  IfcCoil:
    'A coil is a device used to provide heat transfer between non-mixing media. A common example is a cooling coil, which utilizes a finned coil in which circulates chilled water, antifreeze, or refrigerant that is used to remove heat from air moving across the surface of the coil. A coil may be used either for heating or cooling purposes by placing a series of tubes (the coil) carrying a heating or cooling fluid into an airstream. The coil may be constructed from tubes bundled in a serpentine form or from finned tubes that give a extended heat transfer surface.',
  IfcCoilType:
    'The energy conversion device type IfcCoilType defines commonly shared information for occurrences of coils. The set of shared information may include:',
  IfcColourRgb: '',
  IfcColourRgbList:
    'The IfcColourRgbList defines an ordered collection of RGB colour values. Each colour value is a fixed list of three colour components (red, green, blue). The attribute ColourList is a two-dimensional list, where:',
  IfcColourSpecification: '',
  IfcColumn:
    '<An IfcColumn is a vertical structural member which often is aligned with a structural grid intersection. It represents a vertical, or nearly vertical, structural member that transmits, through compression, the weight of the structure above to other structural elements below. It represents such a member from an architectural point of view. It is not required to be load bearing.',
  IfcColumnStandardCase:
    'The standard column, IfcColumnStandardCase, defines a column with certain constraints for the provision of material usage, parameters and with certain constraints for the geometric representation. The IfcColumnStandardCase handles all cases of columns, that:',
  IfcColumnType:
    'The element type IfcColumnType defines commonly shared information for occurrences of columns. The set of shared information may include:',
  IfcCommunicationsAppliance:
    'A communications appliance transmits and receives electronic or digital information as data or sound.',
  IfcCommunicationsApplianceType:
    'The flow terminal type IfcCommunicationsApplianceType defines commonly shared information for occurrences of communications appliances. The set of shared information may include:',
  IfcComplexProperty:
    "IfcComplexProperty is used to define complex properties to be handled completely within a property set. The included set of properties may be a mixed or consistent collection of IfcProperty subtypes. This enables the definition of a set of properties to be included as a single 'property' entry in an IfcPropertySet. The definition of such an IfcComplexProperty can be reused in many different IfcPropertySet's.",
  IfcComplexPropertyTemplate:
    "The IfcComplexPropertyTemplate defines the template for all complex properties, either the IfcComplexProperty's, or the IfcPhysicalComplexQuantity's. The individual complex property templates are interpreted according to their Name attribute and and optional UsageName attribute.",
  IfcCompositeCurve: 'An IfcCompositeCurve is a continuous curve composed of curve segments.',
  IfcCompositeCurveOnSurface:
    'The IfcCompositeCurveOnSurface is a collection of segments, based on p-curves. i.e. a curve which lies on the basis of a surface and is defined in the parameter space of that surface. The p-curve segment is a special type of a composite curve segment and shall only be used to bound a surface.',
  IfcCompositeCurveSegment:
    'An IfcCompositeCurveSegment is a bounded curve constructed for the sole purpose to be a segment within an IfcCompositeCurve.',
  IfcCompositeProfileDef:
    'The IfcCompositeProfileDef defines the profile by composition of other profiles. The composition is given by a set of at least two other profile definitions. Any profile definition (except for another composite profile) can be used to construct the composite.',
  IfcCompressor:
    'A compressor is a device that compresses a fluid typically used in a refrigeration circuit.',
  IfcCompressorType:
    'The flow moving device type IfcCompressorType defines commonly shared information for occurrences of compressors. The set of shared information may include:',
  IfcCondenser:
    'A condenser is a device that is used to dissipate heat, typically by condensing a substance such as a refrigerant from its gaseous to its liquid state.',
  IfcCondenserType:
    'The energy conversion device type IfcCondenserType defines commonly shared information for occurrences of condensers. The set of shared information may include:',
  IfcConic: 'An IfcConic is a parameterized planar curve.',
  IfcConnectedFaceSet: '',
  IfcConnectionCurveGeometry:
    'IfcConnectionCurveGeometry is used to describe the geometric constraints that facilitate the physical connection of two objects at a curve or at an edge with curve geometry associated. It is envisioned as a control that applies to the element connection relationships.',
  IfcConnectionGeometry:
    'IfcConnectionGeometry is used to describe the geometric and topological constraints that facilitate the physical connection of two objects. It is envisioned as a control that applies to the element connection relationships.',
  IfcConnectionPointEccentricity:
    'IfcConnectionPointEccentricity is used to describe the geometric constraints that facilitate the physical connection of two objects at a point or vertex point with associated point coordinates. There is a physical distance, or eccentricity, etween the connection points of both object. The eccentricity can be either given by:',
  IfcConnectionPointGeometry:
    'IfcConnectionPointGeometry is used to describe the geometric constraints that facilitate the physical connection of two objects at a point (here IfcCartesianPoint) or at an vertex with point coordinates associated. It is envisioned as a control that applies to the element connection relationships.',
  IfcConnectionSurfaceGeometry:
    'IfcConnectionSurfaceGeometry is used to describe the geometric constraints that facilitate the physical connection of two objects at a surface or at a face with surface geometry associated. It is envisioned as a control that applies to the element connection relationships.',
  IfcConnectionVolumeGeometry:
    'IfcConnectionVolumeGeometry is used to describe the geometric constraints that facilitate the physical connection (or overlap) of two objects at a volume defined by a solid or closed shell. It is envisioned as a control that applies to the element connection or interference relationships.',
  IfcConstraint:
    'An IfcConstraint is used to define a constraint or limiting value or boundary condition that may be applied to an object or to the value of a property.',
  IfcConstructionEquipmentResource:
    'IfcConstructionEquipmentResource is usage of construction equipment to assist in the performance of construction. Construction Equipment resources are wholly or partially consumed or occupied in the performance of construction.',
  IfcConstructionEquipmentResourceType:
    'The resource type IfcConstructionEquipmentType defines commonly shared information for occurrences of construction equipment resources. The set of shared information may include:',
  IfcConstructionMaterialResource:
    'IfcConstructionMaterialResource identifies a material resource type in a construction project.',
  IfcConstructionMaterialResourceType:
    'The resource type IfcConstructionMaterialType defines commonly shared information for occurrences of construction material resources. The set of shared information may include:',
  IfcConstructionProductResource:
    'IfcConstructionProductResource defines the role of a product that is consumed (wholly or partially), or occupied in the performance of construction.',
  IfcConstructionProductResourceType:
    'The resource type IfcConstructionProductType defines commonly shared information for occurrences of construction product resources. The set of shared information may include:',
  IfcConstructionResource:
    'IfcConstructionResource is an abstract generalization of the different resources used in construction projects, mainly labour, material, equipment and product resources, plus subcontracted resources and aggregations such as a crew resource.',
  IfcConstructionResourceType:
    'IfcConstructionResourceType is an abstract generalization of the different resource types used in construction projects, mainly labor, material, equipment and product resource types, plus subcontracted resource types and aggregations such as a crew resource type.',
  IfcContext:
    "IfcContext is the generalization of a project context in which objects, type objects, property sets, and properties are defined. The IfcProject as subtype of IfcContext provides the context for all information on a construction project, it may include one or several IfcProjectLibrary's as subtype of IfcContext to register the included libraries for the project. A library of products that is referenced is declared within the IfcProjectLibrary as the context of that library.",
  IfcContextDependentUnit: '',
  IfcControl:
    'IfcControl is the abstract generalization of all concepts that control or constrain the utilization of products, processes, or resources in general. It can be seen as a regulation, cost schedule, request or order, or other requirements applied to a product, process or resource whose requirements and provisions must be fulfilled.',
  IfcController:
    'A controller is a device that monitors inputs and controls outputs within a building automation system.',
  IfcControllerType:
    'The distribution control element type IfcControllerType defines commonly shared information for occurrences of controllers. The set of shared information may include:',
  IfcConversionBasedUnit:
    'An IfcConversionBasedUnit is used to define a unit that has a conversion rate to a base unit. To identify some commonly used conversion based units, the standard designations (case insensitive) for the Name attribute are indicated in Table 696.',
  IfcConversionBasedUnitWithOffset:
    'IfcConversionBasedUnitWithOffset is a unit which is converted from another unit by applying a conversion factor and an offset.',
  IfcCooledBeam:
    'A cooled beam (or chilled beam) is a device typically used to cool air by circulating a fluid such as chilled water through exposed finned tubes above a space. Typically mounted overhead near or within a ceiling, the cooled beam uses convection to cool the space below it by acting as a heat sink for the naturally rising warm air of the space. Once cooled, the air naturally drops back to the floor where the cycle begins again.',
  IfcCooledBeamType:
    'The energy conversion device type IfcCooledBeamType defines commonly shared information for occurrences of cooled beams. The set of shared information may include:',
  IfcCoolingTower:
    'A cooling tower is a device which rejects heat to ambient air by circulating a fluid such as water through it to reduce its temperature by partial evaporation.',
  IfcCoolingTowerType:
    'The energy conversion device type IfcCoolingTowerType defines commonly shared information for occurrences of cooling towers. The set of shared information may include:',
  IfcCoordinateOperation:
    'The coordinate operation is an abstract supertype to handle any operation (transformation or conversion) between two coordinate reference systems. It is meant to provide expandability for future versions, since currently only the conversion of a local engineering coordinate system into a map coordinate reference system is dealt with by the subtype IfcMapConversion.',
  IfcCoordinateReferenceSystem:
    'The IfcCoordinateReferenceSystem is a definition of a coordinate reference system by means of qualified identifiers only. The interpretation of the identifier is expected to be well-known to the receiving software.',
  IfcCostItem:
    'An IfcCostItem describes a cost or financial value together with descriptive information that describes its context in a form that enables it to be used within a cost schedule. An IfcCostItem can be used to represent the cost of goods and services, the execution of works by a process, lifecycle cost and more.',
  IfcCostSchedule:
    'An IfcCostSchedule brings together instances of IfcCostItem either for the purpose of identifying purely cost information as in an estimate for constructions costs or for including cost information within another presentation form such as a work order.',
  IfcCostValue: 'IfcCostValue is an amount of money or a value that affects an amount of money.',
  IfcCovering:
    'A covering is an element which covers some part of another element and is fully dependent on that other element. The IfcCovering defines the occurrence of a covering type, that (if given) is expressed by the IfcCoveringType.',
  IfcCoveringType:
    'The element type IfcCoveringType defines commonly shared information for occurrences of coverings. The set of shared information may include:',
  IfcCrewResource:
    'IfcCrewResource represents a collection of internal resources used in construction processes.',
  IfcCrewResourceType:
    'The resource type IfcCrewResourceType defines commonly shared information for occurrences of crew resources. The set of shared information may include:',
  IfcCsgPrimitive3D:
    'IfcCsgPrimitive3D is an abstract supertype of all three dimensional primitives used as either tree root item, or as Boolean results within a CSG solid model. All 3D CSG primitives are defined within a three-dimensional placement coordinate system.',
  IfcCsgSolid:
    'An IfcCsgSolid is the representation of a 3D shape using constructive solid geometry model. It is represented by a single 3D CSG primitive, or as a result of a Boolean operation. The operants of a Boolean operation can be Boolean operations themselves forming a CSG tree. The following volumes can be parts of the CSG tree:',
  IfcCShapeProfileDef:
    "IfcCShapeProfileDef defines a section profile that provides the defining parameters of a C-shaped section to be used by the swept area solid. This section is typically produced by cold forming steel. Its parameters and orientation relative to the position coordinate system are according to the following illustration. The centre of the position coordinate system is in the profile's centre of the bounding box.",
  IfcCurrencyRelationship:
    'IfcCurrencyRelationship defines the rate of exchange that applies between two designated currencies at a particular time and as published by a particular source.',
  IfcCurtainWall:
    'A curtain wall is an exterior wall of a building which is an assembly of components, hung from the edge of the floor/roof structure rather than bearing on a floor. Curtain wall is represented as a building element assembly and implemented as a subtype of IfcBuildingElement that uses an IfcRelAggregates relationship.',
  IfcCurtainWallType:
    'The building element type IfcCurtainWallType defines commonly shared information for occurrences of curtain walls. The set of shared information may include:',
  IfcCurve:
    'An IfcCurve is a curve in two-dimensional or three-dimensional space. It includes definitions for bounded and unbounded curves.',
  IfcCurveBoundedPlane:
    'The IfcCurveBoundedPlane is a parametric planar surface with curved boundaries defined by one or more boundary curves. The bounded plane is defined to be the portion of the basis surface in the direction of N x T from any point on the boundary, where N is the surface normal and T the boundary curve tangent vector at this point. The region so defined shall be arcwise connected.',
  IfcCurveBoundedSurface:
    'The IfcCurveBoundedSurface is a parametric surface with boundaries defined by p-curves, that is, a curve which lies on the basis of a surface and is defined in the parameter space of that surface. The p-curve is a special type of a composite curve segment and shall only be used to bound a surface.',
  IfcCurveStyle:
    'An IfcCurveStyle provides the style table for presentation information assigned to geometric curves. The style is defined by a color, a font and a width. The IfcCurveStyle defines curve patterns as model patterns, that is, the distance between visible and invisible segments of curve patterns are given in model space dimensions (that have to be scaled using the target plot scale).',
  IfcCurveStyleFont: '',
  IfcCurveStyleFontAndScaling:
    'The IfcCurveStyleFontAndScaling allows for the reuse of the same curve style definition in several sizes. The definition of the CurveFontScale is the scaling of a base curve style pattern to be used as a new or derived curve style pattern.',
  IfcCurveStyleFontPattern: '',
  IfcCylindricalSurface:
    'The cylindrical surface is a surface unbounded in the direction of z. Bounded cylindrical surfaces are defined by using a subtype of IfcBoundedSurface with BasisSurface being a cylindrical surface.',
  IfcDamper:
    'A damper typically participates in an HVAC duct distribution system and is used to control or modulate the flow of air.',
  IfcDamperType:
    'The flow controller type IfcDamperType defines commonly shared information for occurrences of dampers. The set of shared information may include:',
  IfcDerivedProfileDef:
    'IfcDerivedProfileDef defines the profile by transformation from the parent profile. The transformation is given by a two dimensional transformation operator. Transformation includes translation, rotation, mirror and scaling. The latter can be uniform or non uniform. The derived profiles may be used to define swept surfaces, swept area solids or sectioned spines.',
  IfcDerivedUnit: '',
  IfcDerivedUnitElement: '',
  IfcDimensionalExponents: '',
  IfcDirection:
    "The IfcDirection provides a direction in two or three dimensional space depending on the number of DirectionRatio's provided. The IfcDirection does not imply a vector length, and the direction ratios does not have to be normalized.",
  IfcDiscreteAccessory:
    'A discrete accessory is a representation of different kinds of accessories included in or added to elements.',
  IfcDiscreteAccessoryType:
    'The element component type IfcDiscreteAccessoryType defines commonly shared information for occurrences of discrete accessorys. The set of shared information may include:',
  IfcDistributionChamberElement:
    'A distribution chamber element defines a place at which distribution systems and their constituent elements may be inspected or through which they may travel.',
  IfcDistributionChamberElementType:
    'The distribution flow element type IfcDistributionChamberElementType defines commonly shared information for occurrences of distribution chamber elements. The set of shared information may include:',
  IfcDistributionCircuit:
    'A distribution circuit is a partition of a distribution system that is conditionally switched such as an electrical circuit.',
  IfcDistributionControlElement:
    'The distribution element IfcDistributionControlElement defines occurrence elements of a building automation control system that are used to impart control over elements of a distribution system.',
  IfcDistributionControlElementType:
    'The element type IfcDistributionControlElementType defines a list of commonly shared property set definitions of an element and an optional set of product representations. It is used to define an element specification (the specific product information that is common to all occurrences of that product type).',
  IfcDistributionElement:
    "This IfcDistributionElement is a generalization of all elements that participate in a distribution system. Typical examples of IfcDistributionElement's are (among others):",
  IfcDistributionElementType:
    'The IfcDistributionElementType defines a list of commonly shared property set definitions of an element and an optional set of product representations. It is used to define an element specification (i.e. the specific product information, that is common to all occurrences of that product type).',
  IfcDistributionFlowElement:
    'The distribution element IfcDistributionFlowElement defines occurrence elements of a distribution system that facilitate the distribution of energy or matter, such as air, water or power.',
  IfcDistributionFlowElementType:
    'The element type IfcDistributionFlowElementType defines a list of commonly shared property set definitions of an element and an optional set of product representations. It is used to define an element specification (the specific product information that is common to all occurrences of that product type).',
  IfcDistributionPort:
    'A distribution port is an inlet or outlet of a product through which a particular substance may flow.',
  IfcDistributionSystem:
    'A distribution system is a network designed to receive, store, maintain, distribute, or control the flow of a distribution media. A common example is a heating hot water system that consists of a pump, a tank, and an interconnected piping system for distributing hot water to terminals.',
  IfcDocumentInformation:
    'IfcDocumentInformation captures "metadata" of an external document. The actual content of the document is not defined in this specification; instead, it can be found following the Location attribute.',
  IfcDocumentInformationRelationship:
    'An IfcDocumentInformationRelationship is a relationship entity that enables a document to have the ability to reference other documents. It is used to describe relationships in which one document may reference one or more other sub documents or where a document is used as a replacement for another document (but where both the original and the replacing document need to be retained).',
  IfcDocumentReference:
    'An IfcDocumentReference is a reference to the location of a document. The reference is given by a system interpretable Location attribute (a URL string) where the document can be found, and an optional inherited internal reference Identification, which refers to a system interpretable position within the document. The optional inherited Name attribute is meant to have meaning for human readers. Optional document metadata can also be captured through reference to IfcDocumentInformation.',
  IfcDoor:
    'The door is a built element that is predominately used to provide controlled access for people, goods, animals and vehicles. It includes constructions with hinged, pivoted, sliding, and additionally revolving and folding operations. REMOVE: A door consists of a lining and one or several panels.',
  IfcDoorLiningProperties:
    'The door lining is the frame which enables the door leaf to be fixed in position. The door lining is used to hang the door leaf. The parameters of the door lining define the geometrically relevant parameter of the lining.',
  IfcDoorPanelProperties:
    'A door panel is normally a door leaf that opens to allow people or goods to pass. The parameters of the door panel define the geometrically relevant parameter of the panel,',
  IfcDoorStandardCase:
    'The standard door, IfcDoorStandardCase, defines a door with certain constraints for the provision of operation types, opening directions, frame and lining parameters, and with certain constraints for the geometric representation. The IfcDoorStandardCase handles all cases of doors, that:',
  IfcDoorStyle:
    'Definition: The door style, IfcDoorStyle, defines a particular style of doors, which may be included into the spatial context of the building model through instances of IfcDoor. A door style defines the overall parameter of the door style and refers to the particular parameter of the lining and one (or several) panels through the IfcDoorLiningProperties and the IfcDoorPanelProperties.',
  IfcDoorType:
    'The element type IfcDoorType defines commonly shared information for occurrences of doors. The set of shared information may include:',
  IfcDraughtingPreDefinedColour:
    'The draughting pre defined colour is a pre defined colour for the purpose to identify a colour by name. Allowable names are:',
  IfcDraughtingPreDefinedCurveFont:
    'The draughting predefined curve font type defines a selection of widely used curve fonts for draughting purposes by name.',
  IfcDuctFitting:
    'A duct fitting is a junction or transition in a ducted flow distribution system or used to connect duct segments, resulting in changes in flow characteristics to the fluid such as direction and flow rate.',
  IfcDuctFittingType:
    'The flow fitting type IfcDuctFittingType defines commonly shared information for occurrences of duct fittings. The set of shared information may include:',
  IfcDuctSegment: 'A duct segment is used to typically join two sections of duct network.',
  IfcDuctSegmentType:
    'The flow segment type IfcDuctSegmentType defines commonly shared information for occurrences of duct segments. The set of shared information may include:',
  IfcDuctSilencer:
    'A duct silencer is a device that is typically installed inside a duct distribution system for the purpose of reducing the noise levels from air movement, fan noise, etc. in the adjacent space or downstream of the duct silencer device.',
  IfcDuctSilencerType:
    'The flow treatment device type IfcDuctSilencerType defines commonly shared information for occurrences of duct silencers. The set of shared information may include:',
  IfcEdge:
    'An IfcEdge defines two vertices being connected topologically. The geometric representation of the connection between the two vertices defaults to a straight line if no curve geometry is assigned using the subtype IfcEdgeCurve. The IfcEdge can therefore be used to exchange straight edges without an associated geometry provided by IfcLine or IfcPolyline thought IfcEdgeCurve.EdgeGeometry.',
  IfcEdgeCurve:
    'An IfcEdgeCurve defines two vertices being connected topologically including the geometric representation of the connection.',
  IfcEdgeLoop: '',
  IfcElectricAppliance:
    'An electric appliance is a device intended for consumer usage that is powered by electricity.',
  IfcElectricApplianceType:
    'The flow terminal type IfcElectricApplianceType defines commonly shared information for occurrences of electric appliances. The set of shared information may include:',
  IfcElectricDistributionBoard:
    'A distribution board is a flow controller in which instances of electrical devices are brought together at a single place for a particular purpose.',
  IfcElectricDistributionBoardType:
    'The flow controller type IfcElectricDistributionBoardType defines commonly shared information for occurrences of electric distribution boards. The set of shared information may include:',
  IfcElectricFlowStorageDevice:
    'An electric flow storage device is a device in which electrical energy is stored and from which energy may be progressively released.',
  IfcElectricFlowStorageDeviceType:
    'The flow storage device type IfcElectricFlowStorageDeviceType defines commonly shared information for occurrences of electric flow storage devices. The set of shared information may include:',
  IfcElectricGenerator:
    'An electric generator is an engine that is a machine for converting mechanical energy into electrical energy.',
  IfcElectricGeneratorType:
    'The energy conversion device type IfcElectricGeneratorType defines commonly shared information for occurrences of electric generators. The set of shared information may include:',
  IfcElectricMotor:
    'An electric motor is an engine that is a machine for converting electrical energy into mechanical energy.',
  IfcElectricMotorType:
    'The energy conversion device type IfcElectricMotorType defines commonly shared information for occurrences of electric motors. The set of shared information may include:',
  IfcElectricTimeControl:
    'An electric time control is a device that applies control to the provision or flow of electrical energy over time.',
  IfcElectricTimeControlType:
    'The flow controller type IfcElectricTimeControlType defines commonly shared information for occurrences of electric time controls. The set of shared information may include:',
  IfcElement: 'An element is a generalization of all components that make up an AEC product.',
  IfcElementarySurface: 'An IfcElementarySurface in the common supertype of analytical surfaces.',
  IfcElementAssembly:
    'The IfcElementAssembly represents complex element assemblies aggregated from several elements, such as discrete elements, building elements, or other elements.',
  IfcElementAssemblyType:
    'The IfcElementAssemblyType defines a list of commonly shared property set definitions of an element and an optional set of product representations. It is used to define an element specification (i.e. the specific product information, that is common to all occurrences of that product type).',
  IfcElementComponent:
    'An element component is a representation for minor items included in, added to or connecting to or between elements, which usually are not of interest from the overall building structure viewpoint. However, these small parts may have vital and load carrying functions within the construction. These items do not provide any actual space boundaries. Typical examples of _IfcElementComponent_s include different kinds of fasteners and various accessories.',
  IfcElementComponentType:
    'The element type IfcElementComponentType defines commonly shared information for occurrences of element components. The set of shared information may include:',
  IfcElementQuantity:
    "An IfcElementQuantity defines a set of derived measures of an element's physical property. Elements could be spatial structure elements (like buildings, storeys, or spaces) or building elements (like walls, slabs, finishes). The IfcElementQuantity gets assigned to the element by using the IfcRelDefinesByProperties relationship.",
  IfcElementType:
    'IfcElementType defines a list of commonly shared property set definitions of an element and an optional set of product representations. It is used to define an element specification (i.e. the specific product information, that is common to all occurrences of that product type).',
  IfcEllipse:
    'An IfcEllipse is a curve consisting of a set of points whose distances to two fixed points add to the same constant.',
  IfcEllipseProfileDef:
    'IfcEllipseProfileDef defines an ellipse as the profile definition used by the swept surface geometry or the swept area solid. It is given by its semi axis attributes and placed within the 2D position coordinate system, established by the Position attribute.',
  IfcEnergyConversionDevice:
    'The distribution flow element IfcEnergyConversionDevice defines the occurrence of a device used to perform energy conversion or heat transfer and typically participates in a flow distribution system. Its type is defined by IfcEnergyConversionDeviceType or its subtypes.',
  IfcEnergyConversionDeviceType:
    'The element type IfcEnergyConversionType defines a list of commonly shared property set definitions of an energy conversion device and an optional set of product representations. It is used to define an energy conversion device specification (the specific product information, that is common to all occurrences of that product type).',
  IfcEngine: 'An engine is a device that converts fuel into mechanical energy through combustion.',
  IfcEngineType:
    'The energy conversion device type IfcEngineType defines commonly shared information for occurrences of engines. The set of shared information may include:',
  IfcEvaporativeCooler:
    'An evaporative cooler is a device that cools air by saturating it with water vapor.',
  IfcEvaporativeCoolerType:
    'The energy conversion device type IfcEvaporativeCoolerType defines commonly shared information for occurrences of evaporative coolers. The set of shared information may include:',
  IfcEvaporator:
    'An evaporator is a device in which a liquid refrigerent is vaporized and absorbs heat from the surrounding fluid.',
  IfcEvaporatorType:
    'The energy conversion device type IfcEvaporatorType defines commonly shared information for occurrences of evaporators. The set of shared information may include:',
  IfcEvent: 'An IfcEvent is something that happens that triggers an action or response.',
  IfcEventTime:
    'IfcEventTime captures the time-related information about an event including the different types of event dates (i.e. actual, scheduled, early, and late).',
  IfcEventType: 'An IfcEventType defines a particular type of event that may be specified.',
  IfcExtendedProperties:
    'The IfcExtendedProperties is an abstract supertype of all extensible property collections that are applicable to certain characterized entities. Instantiable subtypes of IfcExtendedProperties assign the property collection to a particular characterized entity.',
  IfcExternalInformation:
    'An IfcExternalInformation is the identification of an information source that is not explicitly represented in the current model or in the project database (as an implementation of the current model). The IfcExternalInformation identifies the external source (classification, document, or library), but not the particular items such as a dictionary entry, a classification notation, or a document reference within the external source',
  IfcExternallyDefinedHatchStyle: '',
  IfcExternallyDefinedSurfaceStyle:
    'IfcExternallyDefinedSurfaceStyle is a definition of a surface style through referencing an external source, such as a material library for rendering information.',
  IfcExternallyDefinedTextFont: '',
  IfcExternalReference:
    'An IfcExternalReference is the identification of information that is not explicitly represented in the current model or in the project database (as an implementation of the current model). Such information may be contained in classifications, documents or libraries. The IfcExternalReference identifies a particular item, such as a dictionary entry, a classification notation, or a document reference within the external source.',
  IfcExternalReferenceRelationship:
    'IfcExternalReferenceRelationship is a relationship entity that enables objects from the IfcResourceObjectSelect to have the ability to be tagged by external references.',
  IfcExternalSpatialElement:
    'The external spatial element defines external regions at the building site. Those regions can be defined:',
  IfcExternalSpatialStructureElement:
    'The external spatial structure element is an abstract entity provided for different kind of external spaces, regions, and volumes.',
  IfcExtrudedAreaSolid:
    'The IfcExtrudedAreaSolid is defined by sweeping a cross section provided by a profile definition. The direction of the extrusion is given by the ExtrudedDirection attribute and the length of the extrusion is given by the Depth attribute. If the planar area has inner boundaries (holes defined), then those holes shall be swept into holes of the solid.',
  IfcExtrudedAreaSolidTapered:
    'IfcExtrudedAreaSolidTapered is defined by sweeping a cross section along a linear spine. The cross section may change along the sweep from the shape of the start cross section into the shape of the end cross section. The resulting solid is bounded by three or more faces: A start face, an end face (each defined by start and end planes and sections), and one or more lateral faces. Each lateral face is a ruled surface defined by a pair of corresponding edges of the start and end section.',
  IfcFace: 'An IfcFace is topological entity used to define surface, bounded by loops, of a shell.',
  IfcFaceBasedSurfaceModel:
    'The IfcFaceBasedSurfaceModel represents the a shape by connected face sets. The connected faces have a dimensionality 2 and are placed in a coordinate space of dimensionality 3.',
  IfcFaceBound: '',
  IfcFaceOuterBound: '',
  IfcFaceSurface:
    'The IfcFaceSurface defines the underlying geometry of the associated surface to the face.',
  IfcFacetedBrep:
    'The IfcFacetedBrep is a manifold solid brep with the restriction that all faces are planar and bounded polygons.',
  IfcFacetedBrepWithVoids:
    'The IfcFacetedBrepWithVoids is a specialization of a faceted B-rep which contains one or more voids in its interior. The voids are represented as closed shells which are defined so that the shell normal point into the void.',
  IfcFailureConnectionCondition: 'Defines forces at which a support or connection fails.',
  IfcFan:
    'A fan is a device which imparts mechanical work on a gas. A typical usage of a fan is to induce airflow in a building services air distribution system.',
  IfcFanType:
    'The flow moving device type IfcFanType defines commonly shared information for occurrences of fans. The set of shared information may include:',
  IfcFastener:
    'Representations of fixing parts which are used as fasteners to connect or join elements with other elements. Excluded are mechanical fasteners which are modeled by a separate entity (IfcMechanicalFastener).',
  IfcFastenerType:
    'The element component type IfcFastenerType defines commonly shared information for occurrences of fasteners. The set of shared information may include:',
  IfcFeatureElement:
    'A feature element is a generalization of all existence dependent elements which modify the shape and appearance of the associated master element. The IfcFeatureElement offers the ability to handle shape modifiers as semantic objects within the IFC object model.',
  IfcFeatureElementAddition:
    'A feature element addition is a specialization of the general feature element, that represents an existence dependent element which modifies the shape and appearance of the associated master element. The IfcFeatureElementAddition offers the ability to handle shape modifiers as semantic objects within the IFC object model that add to the shape of the master element.',
  IfcFeatureElementSubtraction:
    'The IfcFeatureElementSubtraction is specialization of the general feature element, that represents an existence dependent elements which modifies the shape and appearance of the associated master element. The IfcFeatureElementSubtraction offers the ability to handle shape modifiers as semantic objects within the IFC object model that subtract from the shape of the master element.',
  IfcFillAreaStyle:
    'An IfcFillAreaStyle provides the style table for presentation information assigned to annotation fill areas or surfaces for hatching and tiling. The _IfcFillAreaStyle_defines hatches as model hatches, that is, the distance between hatch lines, or the curve patterns of hatch lines are given in model space dimensions (that have to be scaled using the target plot scale). The IfcFillAreaStyle allows for the following combinations of defining the style of hatching and tiling:',
  IfcFillAreaStyleHatching:
    'The IfcFillAreaStyleHatching is used to define simple, vector-based hatching patterns, based on styled straight lines. The curve font, color and thickness is given by the HatchLineAppearance, the angle by the HatchLineAngle and the distance to the next hatch line by StartOfNextHatchLine, being either an offset distance or a vector.',
  IfcFillAreaStyleTiles:
    'The IfcFillAreaStyleTiles defines the filling of an IfcAnnotationFillArea by recurring patterns of styled two dimensional geometry, called a tile. The recurrence pattern is determined by two vectors, that multiply the tile in regular form.',
  IfcFilter:
    'A filter is an apparatus used to remove particulate or gaseous matter from fluids and gases.',
  IfcFilterType:
    'The flow treatment device type IfcFilterType defines commonly shared information for occurrences of filters. The set of shared information may include:',
  IfcFireSuppressionTerminal:
    'A fire suppression terminal has the purpose of delivering a fluid (gas or liquid) that will suppress a fire.',
  IfcFireSuppressionTerminalType:
    'The flow terminal type IfcFireSuppressionTerminalType defines commonly shared information for occurrences of fire suppression terminals. The set of shared information may include:',
  IfcFixedReferenceSweptAreaSolid:
    "An IfcFixedReferenceSweptAreaSolid is a type of swept area solid which is the result of sweeping an area along a Directrix. The swept area is provided by a subtype of IfcProfileDef. The profile is placed by an implicit cartesian transformation operator at the start point of the sweep, where the profile normal agrees to the tangent of the directrix at this point, and the profile''s x-axis agrees to the FixedReference direction. The orientation of the curve during the sweeping operation is controlled by the FixedReference direction.",
  IfcFlowController:
    'The distribution flow element IfcFlowController defines the occurrence of elements of a distribution system that are used to regulate flow through a distribution system. Examples include dampers, valves, switches, and relays. Its type is defined by IfcFlowControllerType or subtypes.',
  IfcFlowControllerType:
    'The element type IfcFlowControllerType defines a list of commonly shared property set definitions of a flow controller and an optional set of product representations. It is used to define a flow controller specification (i.e. the specific product information, that is common to all occurrences of that product type).',
  IfcFlowFitting:
    'The distribution flow element IfcFlowFitting defines the occurrence of a junction or transition in a flow distribution system, such as an elbow or tee. Its type is defined by IfcFlowFittingType or its subtypes.',
  IfcFlowFittingType:
    'The element type IfcFlowFittingType defines a list of commonly shared property set definitions of a flow fitting and an optional set of product representations. It is used to define a flow fitting specification (i.e. the specific product information, that is common to all occurrences of that product type).',
  IfcFlowInstrument:
    'A flow instrument reads and displays the value of a particular property of a system at a point, or displays the difference in the value of a property between two points.',
  IfcFlowInstrumentType:
    'The distribution control element type IfcFlowInstrumentType defines commonly shared information for occurrences of flow instruments. The set of shared information may include:',
  IfcFlowMeter: 'A flow meter is a device that is used to measure the flow rate in a system.',
  IfcFlowMeterType:
    'The flow controller type IfcFlowMeterType defines commonly shared information for occurrences of flow meters. The set of shared information may include:',
  IfcFlowMovingDevice:
    'The distribution flow element IfcFlowMovingDevice defines the occurrence of an apparatus used to distribute, circulate or perform conveyance of fluids, including liquids and gases (such as a pump or fan), and typically participates in a flow distribution system. Its type is defined by IfcFlowMovingDeviceType or its subtypes.',
  IfcFlowMovingDeviceType:
    'The element type IfcFlowMovingDeviceType defines a list of commonly shared property set definitions of a flow moving device and an optional set of product representations. It is used to define a flow moving device specification (i.e. the specific product information, that is common to all occurrences of that product type).',
  IfcFlowSegment:
    'The distribution flow element IfcFlowSegment defines the occurrence of a segment of a flow distribution system.',
  IfcFlowSegmentType:
    'The element type IfcFlowSegmentType defines a list of commonly shared property set definitions of a flow segment and an optional set of product representations. It is used to define a flow segment specification (the specific product information, that is common to all occurrences of that product type).',
  IfcFlowStorageDevice:
    'The distribution flow element IfcFlowStorageDevice defines the occurrence of a device that participates in a distribution system and is used for temporary storage (such as a tank). Its type is defined by IfcFlowStorageDeviceType or its subtypes.',
  IfcFlowStorageDeviceType:
    'The element type IfcFlowStorageDeviceType defines a list of commonly shared property set definitions of a flow storage device and an optional set of product representations. It is used to define a flow storage device specification (the specific product information that is common to all occurrences of that product type).',
  IfcFlowTerminal:
    'The distribution flow element IfcFlowTerminal defines the occurrence of a permanently attached element that acts as a terminus or beginning of a distribution system (such as an air outlet, drain, water closet, or sink). A terminal is typically a point at which a system interfaces with an external environment. Its type is defined by IfcFlowTerminalType or its subtypes.',
  IfcFlowTerminalType:
    'The element type IfcFlowTerminalType defines a list of commonly shared property set definitions of a flow terminal and an optional set of product representations. It is used to define a flow terminal specification (the specific product information that is common to all occurrences of that product type).',
  IfcFlowTreatmentDevice:
    'The distribution flow element IfcFlowTreatmentDevice defines the occurrence of a device typically used to remove unwanted matter from a fluid, either liquid or gas, and typically participates in a flow distribution system. Its type is defined by IfcFlowTreatmentDeviceType or its subtypes.',
  IfcFlowTreatmentDeviceType:
    'The element type IfcFlowTreatmentDeviceType defines a list of commonly shared property set definitions of a flow treatment device and an optional set of product representations. It is used to define a flow treatment device specification (the specific product information that is common to all occurrences of that product type).',
  IfcFooting:
    'A footing is a part of the foundation of a structure that spreads and transmits the load to the soil. A footing is also characterized as shallow foundation, where the loads are transfered to the ground near the surface.',
  IfcFootingType:
    'The building element type IfcFootingType defines commonly shared information for occurrences of footings. The set of shared information may include:',
  IfcFurnishingElement:
    'A furnishing element is a generalization of all furniture related objects. Furnishing objects are characterized as being',
  IfcFurnishingElementType:
    'IfcFurnishingElementType defines a list of commonly shared property set definitions of an element and an optional set of product representations. It is used to define an element specification (the specific product information, that is common to all occurrences of that product type).',
  IfcFurniture:
    'Furniture defines complete furnishings such as a table, desk, chair, or cabinet, which may or may not be permanently attached to a building structure.',
  IfcFurnitureType:
    'The furnishing element type IfcFurnitureType defines commonly shared information for occurrences of furnitures. The set of shared information may include:',
  IfcGeographicElement:
    'An IfcGeographicElement is a generalization of all elements within a geographical landscape. It includes occurrences of typical geographical elements, often referred to as features, such as trees or terrain. Common type information behind several occurrences of IfcGeographicElement is provided by the IfcGeographicElementType.',
  IfcGeographicElementType:
    "An IfcGeographicElementType is used to define an element specification of a geographic element (i.e. the specific product information, that is common to all occurrences of that product type). Geographic element types include for different types of element that may be used to represent information within a geographical landscape external to a building. Within the world of geographic information they are referred to generally as ''features''. IfcGeographicElementType''s include:",
  IfcGeometricCurveSet:
    'The IfcGeometricCurveSet is used for the exchange of shape representation consisting of an collection of (2D or 3D) points and curves only.',
  IfcGeometricRepresentationContext:
    'The IfcGeometricRepresentationContext defines the context that applies to several shape representations of products within a project. It defines the type of the context in which the shape representation is defined, and the numeric precision applicable to the geometric representation items defined in this context. In addition it can be used to offset the project coordinate system from a global point of origin, using the WorldCoordinateSystem attribute. The main representation context may also provide the true north direction, see Figure 426.',
  IfcGeometricRepresentationItem:
    'An IfcGeometricRepresentationItem is the common supertype of all geometric items used within a representation. It is positioned within a geometric coordinate system, directly or indirectly through intervening items.',
  IfcGeometricRepresentationSubContext:
    'IfcGeometricRepresentationSubContext defines the context that applies to several shape representations of a product being a sub context, sharing the WorldCoordinateSystem, CoordinateSpaceDimension, Precision and TrueNorth attributes with the parent IfcGeometricRepresentationContext.',
  IfcGeometricSet:
    'The IfcGeometricSet is used for the exchange of shape representation consisting of (2D or 3D) points, curves, and surfaces, which do not have a topological structure (such as connected face sets or shells), are not tessellated and are not solid models (such as swept solids, CSG or Brep).',
  IfcGrid:
    'IfcGrid ia a planar design grid defined in 3D space used as an aid in locating structural and design elements. The position of the grid (ObjectPlacement) is defined by a 3D coordinate system (and thereby the design grid can be used in plan, section or in any position relative to the world coordinate system). The position can be relative to the object placement of other products or grids. The XY plane of the 3D coordinate system is used to place the grid axes, which are 2D curves (for example, line, circle, arc, polyline).',
  IfcGridAxis:
    'An individual axis, IfcGridAxis, is defined in the context of a design grid. The axis definition is based on a curve of dimensionality 2. The grid axis is positioned within the XY plane of the position coordinate system defined by the IfcGrid.',
  IfcGridPlacement:
    'IfcGridPlacement provides a specialization of IfcObjectPlacement in which the placement and axis direction of the object coordinate system is defined by a reference to the design grid as defined in IfcGrid.',
  IfcGroup:
    'IfcGroup is an generalization of any arbitrary group. A group is a logical collection of objects. It does not have its own position, nor can it hold its own shape representation. Therefore a group is an aggregation under some non-geometrical / topological grouping aspects.',
  IfcHalfSpaceSolid:
    'A half space solid divides the domain into two by a base surface. Normally, the base surface is a plane and devides the infinitive space into two and indicates the side of the half-space by agreeing or disagreeing to the normal of the plane.',
  IfcHeatExchanger:
    'A heat exchanger is a device used to provide heat transfer between non-mixing media such as plate and shell and tube heat exchangers.',
  IfcHeatExchangerType:
    'The energy conversion device type IfcHeatExchangerType defines commonly shared information for occurrences of heat exchangers. The set of shared information may include:',
  IfcHumidifier: 'A humidifier is a device that adds moisture into the air.',
  IfcHumidifierType:
    'The energy conversion device type IfcHumidifierType defines commonly shared information for occurrences of humidifiers. The set of shared information may include:',
  IfcImageTexture:
    'An IfcImageTexture provides a 2-dimensional texture that can be applied to a surface of an geometric item and that provides lighting parameters of a surface onto which it is mapped. The texture is provided as an image file at an external location for which an URL is provided.',
  IfcIndexedColourMap:
    'The IfcIndexedColourMap provides the assignment of colour information to individual faces. It is used for colouring faces of tessellated face sets. The IfcIndexedColourMap defines an index into an indexed list of colour information. The Colours are a two-dimensional list of colours provided by three RGB values. The ColourIndex attribute corresponds to the CoordIndex of the IfcTessellatedFaceSet defining the corresponding index list of faces. The Opacity attribute provides the alpha channel for all faces of the tessellated face set.',
  IfcIndexedPolyCurve:
    'The IfcIndexedPolyCurve is a bounded curve with only linear and circular arc segments defined by a Cartesian point list and an optional list of segments, providing indices into the Cartesian point list. In the case that the list of Segments is not provided, all points in the IfcCartesianPointList are connected by straight line segments in the order they appear in the IfcCartesianPointList.',
  IfcIndexedPolygonalFace:
    'The IfcIndexedPolygonalFace is a compact representation of a planar face being part of a face set. The vertices of the polygonal planar face are provided by 3 or more Cartesian points, defined by indices that point into an IfcCartesianPointList3D, either direcly, or via the PnIndex, if provided at IfcPolygonalFaceSet.',
  IfcIndexedPolygonalFaceWithVoids:
    'The IfcIndexedPolygonalFaceWithVoids is a compact representation of a planar face with inner loops, being part of a face set.',
  IfcIndexedTextureMap:
    'The IfcIndexedTextureMap provides the mapping of the 2-dimensional texture coordinates to the surface onto which it is mapped. It is used for mapping the texture to faces of tessellated face sets.',
  IfcIndexedTriangleTextureMap:
    'The IfcIndexedTriangleTextureMap provides the mapping of the 2-dimensional texture coordinates to the surface onto which it is mapped. It is used for mapping the texture to triangles of the IfcTriangulatedFaceSet.',
  IfcInterceptor:
    'An interceptor is a device designed and installed in order to separate and retain deleterious, hazardous or undesirable matter while permitting normal sewage or liquids to discharge into a collection system by gravity.',
  IfcInterceptorType:
    'The flow treatment device type IfcInterceptorType defines commonly shared information for occurrences of interceptors. The set of shared information may include:',
  IfcIntersectionCurve:
    'An IfcIntersectionCurve is a 3-dimensional curve that has two additional representations provided by two pcurves defined within two distinct and intersecting surfaces.',
  IfcInventory: 'An inventory is a list of items within an enterprise.',
  IfcIrregularTimeSeries:
    'In an irregular time series, unpredictable bursts of data arrive at unspecified points in time, or most time stamps cannot be characterized by a repeating pattern.',
  IfcIrregularTimeSeriesValue:
    'The IfcIrregularTimeSeriesValue describes a value (or set of values) at a particular time point.',
  IfcIShapeProfileDef:
    "IfcIShapeProfileDef defines a section profile that provides the defining parameters of an 'I' or 'H' section. The I-shape profile has values for its overall depth, width and its web and flange thicknesses. Additionally a fillet radius, flange edge radius, and flange slope may be given. This profile definition represents an I-section which is symmetrical about its major and minor axes; top and bottom flanges are equal and centred on the web.",
  IfcJunctionBox: 'A junction box is an enclosure within which cables are connected.',
  IfcJunctionBoxType:
    'The flow fitting type IfcJunctionBoxType defines commonly shared information for occurrences of junction boxs. The set of shared information may include:',
  IfcLaborResource:
    'An IfcLaborResource is used in construction with particular skills or crafts required to perform certain types of construction or management related work.',
  IfcLaborResourceType:
    'The resource type IfcLaborResourceType defines commonly shared information for occurrences of labour resources. The set of shared information may include:',
  IfcLagTime:
    'IfcLagTime describes the time parameters that may exist within a sequence relationship between two processes.',
  IfcLamp: 'A lamp is an artificial light source such as a light bulb or tube.',
  IfcLampType:
    'The flow terminal type IfcLampType defines commonly shared information for occurrences of lamps. The set of shared information may include:',
  IfcLibraryInformation:
    'An IfcLibraryInformation describes a library where a library is a structured store of information, normally organized in a manner which allows information lookup through an index or reference value. IfcLibraryInformation provides the library Name and optional Description, Version, VersionDate and Publisher attributes. A Location may be added for electronic access to the library.',
  IfcLibraryReference:
    'An IfcLibraryReference is a reference into a library of information by Location (provided as a URI). It also provides an optional inherited Identification key to allow more specific references to library sections or tables. The inherited Name attribute allows for a human interpretable identification of the library item. Also, general information on the library from which the reference is taken, is given by the ReferencedLibrary relation which identifies the relevant occurrence of IfcLibraryInformation.',
  IfcLightDistributionData:
    'IfcLightDistributionData defines the luminous intensity of a light source given at a particular main plane angle. It is based on some standardized light distribution curves; the MainPlaneAngle is either the',
  IfcLightFixture:
    'A light fixture is a container that is designed for the purpose of housing one or more lamps and optionally devices that control, restrict or vary their emission.',
  IfcLightFixtureType:
    'The flow terminal type IfcLightFixtureType defines commonly shared information for occurrences of light fixtures. The set of shared information may include:',
  IfcLightIntensityDistribution:
    'IfcLightIntensityDistribution defines the the luminous intensity of a light source that changes according to the direction of the ray. It is based on some standardized light distribution curves, which are defined by the LightDistributionCurve attribute.',
  IfcLightSource: '',
  IfcLightSourceAmbient: '',
  IfcLightSourceDirectional: '',
  IfcLightSourceGoniometric:
    'IfcLightSourceGoniometric defines a light source for which exact lighting data is available. It specifies the type of a light emitter, defines the position and orientation of a light distribution curve and the data concerning lamp and photometric information.',
  IfcLightSourcePositional: '',
  IfcLightSourceSpot: '',
  IfcLine:
    'The IfcLine is an unbounded line parameterized by an IfcCartesianPoint and an IfcVector. The magnitude of the IfcVector affects the parameterization of the line, but it does not bound the line.',
  IfcLocalPlacement:
    'An IfcLocalPlacement defines the relative placement of a product in relation to the placement of another product or the absolute placement of a product within the geometric representation context of the project.',
  IfcLoop: '',
  IfcLShapeProfileDef:
    'IfcLShapeProfileDef defines a section profile that provides the defining parameters of an L-shaped section (equilateral L profiles are also covered by this entity) to be used by the swept area solid. Its parameters and orientation relative to the position coordinate system are according to the following illustration. The shorter leg has the same direction as the positive Position.P[1]-axis, the longer or equal leg the same as the positive Position.P[2]-axis. The centre of the position coordinate system is in the profiles centre of the bounding box.',
  IfcManifoldSolidBrep:
    'The IfcManifoldSolidBrep is a solid represented as a collection of connected surfaces that delimit the solid from the surrounding non-solid.',
  IfcMapConversion:
    'The map conversion deals with transforming the local engineering coordinate system, often called world coordinate system, into the coordinate reference system of the underlying map.',
  IfcMappedItem:
    'The IfcMappedItem is the inserted instance of a source definition (to be compared with a block / shared cell / macro definition). The instance is inserted by applying a Cartesian transformation operator as the MappingTarget.',
  IfcMaterial:
    'IfcMaterial is a homogeneous or inhomogeneous substance that can be used to form elements (physical products or their components).',
  IfcMaterialClassificationRelationship:
    'IfcMaterialClassificationRelationship is a relationship assigning classifications to materials.',
  IfcMaterialConstituent:
    'IfcMaterialConstituent is a single and identifiable part of an element which is constructed of a number of part (one or more) each having an individual material. The association of the material constituent to the part is provided by a keyword as value of the Name attribute. In order to identify and distinguish the part of the shape representation to which the material constituent applies the IfcProductDefinitionShape of the element has to include instances of IfcShapeAspect, using the same keyword for their Name attribute.',
  IfcMaterialConstituentSet:
    'IfcMaterialConstituentSet is a collection of individual material constituents, each assigning a material to a part of an element. The parts are only identified by a keyword (as opposed to an IfcMaterialLayerSet or IfcMaterialProfileSet where each part has an individual shape parameter (layer thickness or layer profile).',
  IfcMaterialDefinition:
    'IfcMaterialDefinition is a general supertype for all material related information items in IFC that have common material related properties that may include association of material with some shape parameters or assignments to identified parts of a component.',
  IfcMaterialDefinitionRepresentation:
    'IfcMaterialDefinitionRepresentation defines presentation information relating to IfcMaterial. It allows for multiple presentations of the same material for different geometric representation contexts.',
  IfcMaterialLayer:
    'IfcMaterialLayer is a single and identifiable part of an element which is constructed of a number of layers (one or more). Each IfcMaterialLayer has a constant thickness and is located relative to the referencing IfcMaterialLayerSet along the material layer set base (MlsBase).',
  IfcMaterialLayerSet:
    'The IfcMaterialLayerSet is a designation by which materials of an element constructed of a number of material layers is known and through which the relative positioning of individual layers can be expressed.',
  IfcMaterialLayerSetUsage:
    'The IfcMaterialLayerSetUsage determines the usage of IfcMaterialLayerSet in terms of its location and orientation relative to the associated element geometry. The location of material layer set shall be compatible with the building element geometry (that is, material layers shall fit inside the element geometry). The rules to ensure the compatibility depend on the type of the building element.',
  IfcMaterialLayerWithOffsets:
    'IfcMaterialLayerWithOffsets is a specialization of IfcMaterialLayer enabling definition of offset values along edges (within the material layer set usage in parent layer set).',
  IfcMaterialList:
    'IfcMaterialList is a list of the different materials that are used in an element.',
  IfcMaterialProfile:
    'IfcMaterialProfile is a single and identifiable cross section of an element which is constructed of a number of profiles (one or more).',
  IfcMaterialProfileSet:
    'The IfcMaterialProfileSet is a designation by which individual material(s) of a prismatic element (for example, beam or column) constructed of a single or multiple material profiles is known.',
  IfcMaterialProfileSetUsage:
    'IfcMaterialProfileSetUsage determines the usage of IfcMaterialProfileSet in terms of its location relative to the associated element geometry. The location of a material profile set shall be compatible with the building element geometry (that is, material profiles shall fit inside the element geometry). The rules to ensure the compatibility depend on the type of the building element. For building elements with shape representations which are based on extruded solids, this is accomplished by referring to the identical profile definition in the shape model as in the material profile set.',
  IfcMaterialProfileSetUsageTapering:
    'IfcMaterialProfileSetUsageTapering specifies dual material profile sets in association with tapered prismatic (beam- or column-like) elements.',
  IfcMaterialProfileWithOffsets:
    'IfcMaterialProfileWithOffsets is a specialization of IfcMaterialProfile with additional longitudinal offsets .',
  IfcMaterialProperties:
    'The IfcMaterialProperties assigns a set of material properties to associated material definitions. The set may be identified by a Name and a Description. The IfcProperty (instantiable subtypes) is used to express the individual material properties by name, description, value and unit.',
  IfcMaterialRelationship:
    'IfcMaterialRelationship defines a relationship between part and whole in material definitions (as in composite materials). The parts, expressed by the set of RelatedMaterials, are material constituents of which a single material aggregate is composed.',
  IfcMaterialUsageDefinition:
    'IfcMaterialUsageDefinition is a general supertype for all material related information items in IFC that have occurrence specific assignment parameters to assign a set of materials with shape parameters to a reference geometry item of that component.',
  IfcMeasureWithUnit: '',
  IfcMechanicalFastener:
    'A mechanical fasteners connecting building elements or parts mechanically. A single instance of this class may represent one or many of actual mechanical fasteners, for example an array of bolts or a row of nails.',
  IfcMechanicalFastenerType:
    'The element component type IfcMechanicalFastenerType defines commonly shared information for occurrences of mechanical fasteners. The set of shared information may include:',
  IfcMedicalDevice:
    'A medical device is attached to a medical piping system and operates upon medical gases to perform a specific function. Medical gases include medical air, medical vacuum, oxygen, carbon dioxide, nitrogen, and nitrous oxide.',
  IfcMedicalDeviceType:
    'The flow terminal type IfcMedicalDeviceType defines commonly shared information for occurrences of medical devices. The set of shared information may include:',
  IfcMember:
    'An IfcMember is a structural member designed to carry loads between or beyond points of support. It is not required to be load bearing. The orientation of the member (being horizontal, vertical or sloped) is not relevant to its definition (in contrary to IfcBeam and IfcColumn). An IfcMember represents a linear structural element from an architectural or structural modeling point of view and shall be used if it cannot be expressed more specifically as either an IfcBeam or an IfcColumn.',
  IfcMemberStandardCase:
    'The standard member, IfcMemberStandardCase, defines a member with certain constraints for the provision of material usage, parameters and with certain constraints for the geometric representation. The IfcMemberStandardCase handles all cases of members, that:',
  IfcMemberType:
    'The element type IfcMemberType defines commonly shared information for occurrences of members. Members are predominately linear building elements, often forming part of a structural system. The orientation of the member (being horizontal, vertical or sloped) is not relevant to its definition (in contrary to beam and column). The set of shared information may include:',
  IfcMetric:
    'An IfcMetric is used to capture quantitative resultant metrics that can be applied to objectives.',
  IfcMirroredProfileDef:
    'The IfcMirroredProfileDef defines the profile by mirroring the parent profile about the y axis of the parent profile coordinate system. That is, left and right of the parent profile are swapped.',
  IfcMonetaryUnit: 'IfcMonetaryUnit is a unit to define currency for money.',
  IfcMotorConnection:
    'A motor connection provides the means for connecting a motor as the driving device to the driven device.',
  IfcMotorConnectionType:
    'The energy conversion device type IfcMotorConnectionType defines commonly shared information for occurrences of motor connections. The set of shared information may include:',
  IfcNamedUnit: '',
  IfcObject:
    'An IfcObject is the generalization of any semantically treated thing or process. Objects are things as they appear - i.e. occurrences.',
  IfcObjectDefinition:
    'An IfcObjectDefinition is the generalization of any semantically treated thing or process, either being a type or an occurrences. Object defintions can be named, using the inherited Name attribute, which should be a user recognizable label for the object occurrance. Further explanations to the object can be given using the inherited Description attribute. A context is a specific kind of object definition as it provides the project or library context in which object types and object occurrences are defined.',
  IfcObjective:
    'An IfcObjective captures qualitative information for an objective-based constraint.',
  IfcObjectPlacement:
    'IfcObjectPlacement is an abstract supertype for the special types defining the object coordinate system. The IfcObjectPlacement has to be provided for each product that has a shape representation.',
  IfcOccupant: 'An occupant is a type of actor that defines the form of occupancy of a property.',
  IfcOffsetCurve2D:
    'An IfcOffsetCurve2D is a curve defined by an offset in 2D space from its BasisCurve.',
  IfcOffsetCurve3D:
    'An IfcOffsetCurve3D is a curve defined by an offset in 3D space from its BasisCurve.',
  IfcOpeningElement:
    'The opening element stands for opening, recess or chase, all reflecting voids. It represents a void within any element that has physical manifestation. Openings can be inserted into walls, slabs, beams, columns, or other elements.',
  IfcOpeningStandardCase:
    'The standard opening, IfcOpeningStandardCase, defines an opening with certain constraints for the dimension parameters, position within the voided element, and with certain constraints for the geometric representation. The IfcOpeningStandardCase handles all cases of openings, that:',
  IfcOpenShell: '',
  IfcOrganization: 'A named and structured grouping with a corporate identity.',
  IfcOrganizationRelationship:
    'The IfcOrganizationRelationship establishes an association between one relating organization and one or more related organizations.',
  IfcOrientedEdge:
    'The IfcOrientedEdge represents an IfcEdge with an Orientation flag applied. It allows to reuse the same IfcEdge when traversed exactly twice, once forwards and once backwards.',
  IfcOuterBoundaryCurve:
    'The IfcOuterBoundaryCurve defines the outer boundary of a bounded surface.',
  IfcOutlet:
    'An outlet is a device installed at a point to receive one or more inserted plugs for electrical power or communications.',
  IfcOutletType:
    'The flow terminal type IfcOutletType defines commonly shared information for occurrences of outlets. The set of shared information may include:',
  IfcOwnerHistory:
    'IfcOwnerHistory defines all history and identification related information. In order to provide fast access it is directly attached to all independent objects, relationships and properties.',
  IfcParameterizedProfileDef:
    'The parameterized profile definition defines a 2D position coordinate system to which the parameters of the different profiles relate to. All profiles are defined centric to the origin of the position coordinate system, or more specific, the origin [0.,0.] shall be in the center of the bounding box of the profile.',
  IfcPath: '',
  IfcPcurve:
    'The IfcPcurve is a curve defined within the parameter space of its reference surface.',
  IfcPerformanceHistory:
    'IfcPerformanceHistory is used to document the actual performance of an occurrence instance over time. It includes machine-measured data from building automation systems and human-specified data such as task and resource usage. The data may represent actual conditions, predictions, or simulations.',
  IfcPermeableCoveringProperties:
    'This entity is a description of a panel within a door or window (as fillers for opening) which allows for air flow. It is given by its properties (IfcPermeableCoveringProperties). A permeable covering is a casement, such as a component, fixed or opening, consisting essentially of a frame and the infilling. The infilling is normally a grill, a louver or a screen. The way of operation is defined in the operation type.',
  IfcPermit:
    'A permit is a permission to perform work in places and on artifacts where regulatory, security or other access restrictions apply.',
  IfcPerson: 'This entity represents an individual human being.',
  IfcPersonAndOrganization: 'This entity represents a person acting on behalf of an organization.',
  IfcPhysicalComplexQuantity:
    'The complex physical quantity, IfcPhysicalComplexQuantity, is an entity that holds a set of single quantity measure value (as defined at the subtypes of IfcPhysicalSimpleQuantity), that all apply to a given component or aspect of the element.',
  IfcPhysicalQuantity:
    'The physical quantity, IfcPhysicalQuantity, is an abstract entity that holds a complex or simple quantity measure together with a semantic definition of the usage for the single or several measure value.',
  IfcPhysicalSimpleQuantity:
    'The physical quantity, IfcPhysicalSimpleQuantity, is an entity that holds a single quantity measure value (as defined at the subtypes of IfcPhysicalSimpleQuantity) together with a semantic definition of the usage for the measure value.',
  IfcPile:
    'A pile is a slender timber, concrete, or steel structural element, driven, jetted, or otherwise embedded on end in the ground for the purpose of supporting a load. A pile is also characterized as deep foundation, where the loads are transfered to deeper subsurface layers.',
  IfcPileType:
    'The building element type IfcPileType defines commonly shared information for occurrences of piles. The set of shared information may include:',
  IfcPipeFitting:
    'A pipe fitting is a junction or transition in a piping flow distribution system used to connect pipe segments, resulting in changes in flow characteristics to the fluid such as direction or flow rate.',
  IfcPipeFittingType:
    'The flow fitting type IfcPipeFittingType defines commonly shared information for occurrences of pipe fittings. The set of shared information may include:',
  IfcPipeSegment: 'A pipe segment is used to typically join two sections of a piping network.',
  IfcPipeSegmentType:
    'The flow segment type IfcPipeSegmentType defines commonly shared information for occurrences of pipe segments. The set of shared information may include:',
  IfcPixelTexture:
    'An IfcPixelTexture provides a 2D image-based texture map as an explicit array of pixel values (list of Pixel binary attributes). In contrary to the IfcImageTexture the IfcPixelTexture holds a 2 dimensional list of pixel color (and opacity) directly, instead of referencing to an URL.',
  IfcPlacement:
    'An IfcPlacement is an abstract supertype of placement subtypes that define the location of an item, or an entire shape representation, and provide its orientation. All placement subtypes define right-handed Cartesian coordinate systems and do not allow mirroring.',
  IfcPlanarBox:
    'A planar box specifies an arbitrary rectangular box and its location in a two dimensional Cartesian coordinate system. If the planar box is used within a three-dimensional coordinate system, it defines the rectangular box within the XY plane.',
  IfcPlanarExtent:
    'The planar extent defines the extent along the two axes of the two-dimensional coordinate system, independently of its position. If the planar extent is used within a three-dimensional coordinate system, it defines the extent along the x and y axes.',
  IfcPlane:
    'The planar surface is an unbounded surface in the direction of x and y. Bounded planar surfaces are defined by using a subtype of IfcBoundedSurface with BasisSurface being a plane.',
  IfcPlate:
    'An IfcPlate is a planar and often flat part with constant thickness. A plate may carry loads between or beyond points of support, or provide stiffening. The location of the plate (being horizontal, vertical or sloped) is not relevant to its definition (in contrary to IfcWall and IfcSlab (as floor slab)).',
  IfcPlateStandardCase:
    'The standard plate, IfcPlateStandardCase, defines a plate with certain constraints for the provision of material usage, parameters and with certain constraints for the geometric representation. The IfcPlateStandardCase handles all cases of plates, that:',
  IfcPlateType:
    'The element type IfcPlateType defines commonly shared information for occurrences of plates. The set of shared information may include:',
  IfcPoint:
    'The IfcPoint is the abstract generalisation of all point representations within a Cartesian coordinate system.',
  IfcPointOnCurve:
    'The IfcPointOnCurve is a point defined by a parameter value of its defining curve.',
  IfcPointOnSurface:
    'The IfcPointOnSurface is a point defined by two parameter value of its defining surface.',
  IfcPolygonalBoundedHalfSpace:
    'The polygonal bounded half space is a special subtype of a half space solid, where the material of the half space used in Boolean expressions is bounded by a polygonal boundary. The base surface of the half space is positioned by its normal relative to the object coordinate system (as defined at the supertype IfcHalfSpaceSolid),\u00a0and its polygonal (with or without arc segments) boundary is defined in the XY plane of the position coordinate system established by the Position attribute, the subtraction body is extruded perpendicular to the XY plane of the position coordinate system, that is, into the direction of the positive Z axis defined by the Position attribute.',
  IfcPolygonalFaceSet:
    'The IfcPolygonalFaceSet is a tessellated face set with all faces being bound by polygons. The planar faces are constructed by implicit polylines defined by three or more Cartesian points. Each planar face is defined by an instance of IfcIndexedPolygonalFace, or in case of faces with inner loops by IfcIndexedPolygonalFaceWithVoids.',
  IfcPolyline:
    'The IfcPolyline is a bounded curve with only linear segments defined by a list of Cartesian points. If the first and the last Cartesian point in the list are identical, then the polyline is a closed curve, otherwise it is an open curve.',
  IfcPolyLoop: '',
  IfcPort: 'A port provides the means for an element to connect to other elements.',
  IfcPostalAddress:
    'This entity represents an address for delivery of paper based mail and other postal deliveries.',
  IfcPreDefinedColour:
    'The pre defined colour determines those qualified names which can be used to identify a colour that is in scope of the current data exchange specification (in contrary to colour specification which defines the colour directly by its colour components).',
  IfcPreDefinedCurveFont: '',
  IfcPreDefinedItem:
    'A pre defined item is a qualified name given to a style or font which is determined within the data exchange specification by convention on using the Name attribute value (in contrary to externally defined items, which are agreed by an external source).',
  IfcPreDefinedProperties:
    'The IfcPreDefinedProperties is an abstract supertype of all predefined property collections that have explicit attributes, each representing a property. Instantiable subtypes are assigned to specific characterised entities.',
  IfcPreDefinedPropertySet:
    'IfcPreDefinedPropertySet is a generalization of all statically defined property sets that are assigned to an object or type object. The statically or pre-defined property sets are entities with a fixed list of attributes having particular defined data types.',
  IfcPreDefinedTextFont:
    'The pre defined text font determines those qualified names which can be used for fonts that are in scope of the current data exchange specification (in contrary to externally defined text fonts). There are two choices:',
  IfcPresentationItem:
    'The IfcPresentationItem is the abstract supertype of all entities used for presentation appearance definitions.',
  IfcPresentationLayerAssignment:
    'The presentation layer assignment provides the layer name (and optionally a description and an identifier) for a collection of geometric representation items. The IfcPresentationLayerAssignment corresponds to the term "CAD Layer" and is used mainly for grouping and visibility control.',
  IfcPresentationLayerWithStyle:
    'An IfcPresentationLayerAssignmentWithStyle extends the presentation layer assignment with capabilities to define visibility control, access control and common style information.',
  IfcPresentationStyle:
    'The IfcPresentationStyle is an abstract generalization of style table for presentation information assigned to geometric representation items. It includes styles for curves, areas, surfaces, and text. Style information may include colour, hatching, rendering, and text fonts.',
  IfcPresentationStyleAssignment: 'Assignment of style information to a styled item.',
  IfcProcedure:
    'An IfcProcedure is a logical set of actions to be taken in response to an event or to cause an event to occur.',
  IfcProcedureType:
    'An IfcProcedureType defines a particular type of procedure that may be specified.',
  IfcProcess:
    'IfcProcess is defined as one individual activity or event, that is ordered in time, that has sequence relationships with other processes, which transforms input in output, and may connect to other other processes through input output relationships. An IfcProcess can be an activity (or task), or an event. It takes usually place in building construction with the intent of designing, costing, acquiring, constructing, or maintaining products or other and similar tasks or procedures. Figure 131 illustrates process relationships.',
  IfcProduct:
    'The IfcProduct is an abstract representation of any object that relates to a geometric or spatial context. An IfcProduct occurs at a specific location in space if it has a geometric representation assigned. It can be placed relatively to other products, but ultimately relative to the project coordinate system. The ObjectPlacement attribute establishes the coordinate system in which all points and directions used by the geometric representation items under Representation are founded. The Representation is provided by an IfcProductDefinitionShape being either a geometric shape representation, or a topology representation (with or without underlying geometry of the topological items).',
  IfcProductDefinitionShape:
    'The IfcProductDefinitionShape defines all shape relevant information about an IfcProduct. It allows for multiple geometric shape representations of the same product. The shape relevant information includes:',
  IfcProductRepresentation:
    'IfcProductRepresentation defines a representation of a product, including its (geometric or topological) representation. A product can have zero, one or many geometric representations, and a single geometric representation can be shared among various products using mapped representations.',
  IfcProfileDef:
    'IfcProfileDef is the supertype of all definitions of standard and arbitrary profiles within IFC. It is used to define a standard set of commonly used section profiles by their parameters or by their explicit curve geometry.',
  IfcProfileProperties:
    'This is a collection of properties applicable to section profile definitions.',
  IfcProject:
    "IfcProject indicates the undertaking of some design, engineering, construction, or maintenance activities leading towards a product. The project establishes the context for information to be exchanged or shared, and it may represent a construction project but does not have to. The IfcProject's main purpose in an exchange structure is to provide the root instance and the context for all other information items included.",
  IfcProjectedCRS:
    'IfcProjectedCRS is a coordinate reference system of the map to which the map translation of the local engineering coordinate system of the construction or facility engineering project relates. The MapProjection and MapZone attributes uniquely identify the projection to the underlying geographic coordinate reference system, provided that they are well-known in the receiving application. The projected coordinate reference system is assumed to be a 2D or 3D right-handed Cartesian coordinate system, the optional MapUnit attribute can be used determine the length unit used by the map.',
  IfcProjectionElement:
    'The projection element is a specialization of the general feature element to represent projections applied to building elements. It represents a solid attached to any element that has physical manifestation.',
  IfcProjectLibrary:
    'An IfcProjectLibrary collects all library elements that are included within a referenced project data set.',
  IfcProjectOrder:
    'A project order is a directive to purchase products and/or perform work, such as for construction or facilities management.',
  IfcProperty:
    'IfcProperty is an abstract generalization for all types of properties that can be associated with IFC objects through the property set mechanism.',
  IfcPropertyAbstraction:
    'The IfcPropertyAbstraction is an abstract supertype of all property related entities defined as dependent resource entities within the specification. It may have an external reference to a dictionary or library that provides additional information about its definition. Instantiable subtypes have property name, value and other instance information.',
  IfcPropertyBoundedValue:
    'A property with a bounded value, IfcPropertyBoundedValue, defines a property object which has a maximum of two (numeric or descriptive) values assigned, the first value specifying the upper bound and the second value specifying the lower bound. It defines a property - value bound (min-max) combination for which the property Name, an optional Description,\u00a0the optional UpperBoundValue with measure type, the optional LowerBoundValue with measure type, and the optional Unit is given. A set point value can be provided in addition to the upper and lower bound values for operational value setting.',
  IfcPropertyDefinition:
    'IfcPropertyDefinition defines the generalization of all characteristics (i.e. a grouping of individual properties), that may be assigned to objects. Currently, subtypes of IfcPropertyDefinition include property set occurrences, property set templates, and property templates.',
  IfcPropertyDependencyRelationship:
    'An IfcPropertyDependencyRelationship describes an identified dependency between the value of one property and that of another.',
  IfcPropertyEnumeratedValue:
    'A property with an enumerated value, IfcPropertyEnumeratedValue, defines a property object which has a value assigned that is chosen from an enumeration. It defines a property - value combination for which the\u00a0property Name, an optional Description,\u00a0the optional EnumerationValues with measure type and optionally an Unit is given.',
  IfcPropertyEnumeration:
    "IfcPropertyEnumeration is a collection of simple or measure values that define a prescribed set of alternatives from which 'enumeration values' are selected. This enables inclusion of enumeration values in property sets. IfcPropertyEnumeration provides a name for the enumeration as well as a list of unique (numeric or descriptive) values (that may have a measure type assigned). The entity defines the list of potential enumerators to be exchanged together (or separately) with properties of type IfcPropertyEnumeratedValue that selects their actual property values from this enumeration.",
  IfcPropertyListValue:
    'An IfcPropertyListValue defines a property that has several (numeric or descriptive) values assigned, these values are given by an ordered list.\u00a0It defines a property - list value combination for which the property Name, an optional Description,\u00a0the optional ListValues with measure type and optionally an Unit is given. An IfcPropertyListValue is a list of values. The order in which values appear is significant. All list members shall be of the same type.',
  IfcPropertyReferenceValue:
    'The IfcPropertyReferenceValue allows a property value to be of type of an resource level entity. The applicable entities that can be used as value references are given by the IfcObjectReferenceSelect.',
  IfcPropertySet:
    'The IfcPropertySet is a container that holds properties within a property tree. These properties are interpreted according to their name attribute. Each individual property has a significant name string. Some property sets are included in the specification of this standard and have a predefined set of properties indicated by assigning a significant name. These property sets are listed under "property sets" within this specification. Property sets applicable to certain objects are listed in the object specification. The naming convention "Pset_Xxx" applies to all those property sets that are defined as part of this specification and it shall be used as the value of the Name attribute.',
  IfcPropertySetDefinition:
    'IfcPropertySetDefinition is a generalization of all individual property sets that can be assigned to an object or type object. The property set definition can be either:',
  IfcPropertySetTemplate:
    'IfcPropertySetTemplate defines the template for all dynamically extensible property sets represented by IfcPropertySet. The property set template is a container of property templates within a property tree. The individual property templates are interpreted according to their Name attribute and shall have no values assigned.',
  IfcPropertySingleValue:
    'The property with a single value IfcPropertySingleValue defines a property object which has a single (numeric or descriptive) value assigned. It defines a property - single value combination for which the property Name, an optional Description,\u00a0and an optional NominalValue with measure type is provided. In addition, the default unit as specified within the project unit context can be overriden by assigning an Unit.',
  IfcPropertyTableValue:
    'IfcPropertyTableValue is a property with a value range defined by a property object which has two lists of (numeric or descriptive) values assigned. The values specify a table with two columns. The defining values provide the first column and establish the scope for the defined values (the second column). An optional Expression attribute may give the equation used for deriving the range value, which is for information purposes only.',
  IfcPropertyTemplate:
    'The IfcPropertyTemplate is an abstract supertype comprising the templates for all dynamically extensible properties, either as an IfcComplexPropertyTemplate, or an IfcSimplePropertyTemplate. These templates determine the structure of:',
  IfcPropertyTemplateDefinition:
    'IfcPropertyTemplateDefinition is a generalization of all property and property set templates. Templates define the collection, types, names, applicable measure types and units of individual properties used in a project. The property template definition can be either:',
  IfcProtectiveDevice:
    'A protective device breaks an electrical circuit when a stated electric current that passes through it is exceeded.',
  IfcProtectiveDeviceTrippingUnit:
    'A protective device tripping unit breaks an electrical circuit at a separate breaking unit when a stated electric current that passes through the unit is exceeded.',
  IfcProtectiveDeviceTrippingUnitType:
    'The distribution control element type IfcProtectiveDeviceTrippingUnitType defines commonly shared information for occurrences of protective device tripping units. The set of shared information may include:',
  IfcProtectiveDeviceType:
    'The flow controller type IfcProtectiveDeviceType defines commonly shared information for occurrences of protective devices. The set of shared information may include:',
  IfcProxy:
    'IfcProxy is intended to be a kind of a container for wrapping objects which are defined by associated properties, which may or may not have a geometric representation and placement in space. A proxy may have a semantic meaning, defined by the Name attribute, and property definitions, attached through the property assignment relationship, which definition may be outside of the definitions given by the current release of IFC.',
  IfcPump:
    'A pump is a device which imparts mechanical work on fluids or slurries to move them through a channel or pipeline. A typical use of a pump is to circulate chilled water or heating hot water in a building services distribution system.',
  IfcPumpType:
    'The flow moving device type IfcPumpType defines commonly shared information for occurrences of pumps. The set of shared information may include:',
  IfcQuantityArea:
    "IfcQuantityArea is a physical quantity that defines a derived area measure to provide an element's physical property. It is normally derived from the physical properties of the element under the specific measure rules given by a method of measurement.",
  IfcQuantityCount:
    "IfcQuantityCount is a physical quantity that defines a derived count measure to provide an element's physical property. It is normally derived from the physical properties of the element under the specific measure rules given by a method of measurement.",
  IfcQuantityLength:
    "IfcQuantityLength is a physical quantity that defines a derived length measure to provide an element's physical property. It is normally derived from the physical properties of the element under the specific measure rules given by a method of measurement.",
  IfcQuantitySet:
    'IfcQuantitySet is the the abstract supertype for all quantity sets attached to objects. The quantity set is a container class that holds the individual quantities within a quantity tree. These quantities are interpreted according to their name attribute and classified according to their measure type. Some quantity sets are included in the IFC specification and have a predefined set of quantities indicated by assigning a significant name. These quantity sets are listed as "quantity sets" within this specification. Quantity sets applicable to certain objects are listed in the object specification.',
  IfcQuantityTime:
    'IfcQuantityTime is an element quantity that defines a time measure to provide a property of time related to an element. It is normally given by the recipe information of the element under the specific measure rules given by a method of measurement.',
  IfcQuantityVolume:
    "IfcQuantityVolume is a physical quantity that defines a derived volume measure to provide an element's physical property. It is normally derived from the physical properties of the element under the specific measure rules given by a method of measurement.",
  IfcQuantityWeight:
    "IfcQuantityWeight is a physical element quantity that defines a derived weight measure to provide an element's physical property. It is normally derived from the physical properties of the element under the specific measure rules given by a method of measurement.",
  IfcRailing:
    'The railing is a frame assembly adjacent to human or vehicle circulation spaces and at some space boundaries where it is used in lieu of walls or to complement walls. REMOVE{ Designed to aid humans, either as an optional physical support, or to prevent injury or damage, either by falling or collision.}Designed as an optional physical support, or to prevent injury or damage, either by falling or collision.',
  IfcRailingType:
    'The building element type IfcRailingType defines commonly shared information for occurrences of railings. The set of shared information may include:',
  IfcRamp:
    'A ramp is a vertical passageway which provides a human or vehicle circulation link between one floor level and another floor level at a different elevation. It may include a landing as an intermediate floor slab. A ramp normally does not include steps.',
  IfcRampFlight:
    'A ramp comprises a single inclined segment, or several inclined segments that are connected by a horizontal segment, refered to as a landing. A ramp flight is the single inclined segment and part of the ramp construction. In case of single flight ramps, the ramp flight and the ramp are identical.',
  IfcRampFlightType:
    'The building element type IfcRampFlightType defines commonly shared information for occurrences of ramp flights. The set of shared information may include:',
  IfcRampType:
    'The building element type IfcRampType defines commonly shared information for occurrences of ramps. The set of shared information may include:',
  IfcRationalBSplineCurveWithKnots:
    'A rational B-spline curve with knots is a B-spline curve described in terms of control points and basic functions. It describes weights in addition to the control points defined at the supertype IfcBSplineCurve.',
  IfcRationalBSplineSurfaceWithKnots:
    'A rational B-spline surface with knots is a piecewise parametric rational surface described in terms of control points, and associated weight values.',
  IfcRectangleHollowProfileDef:
    'IfcRectangleHollowProfileDef defines a section profile that provides the defining parameters of a rectangular (or square) hollow section to be used by the swept surface geometry or the swept area solid. Its parameters and orientation relative to the position coordinate system are according to the following illustration. A square hollow section can be defined by equal values for h and b. The centre of the position coordinate system is in the profiles centre of the bounding box (for symmetric profiles identical with the centre of gravity). Normally, the longer sides are parallel to the y-axis, the shorter sides parallel to the x-axis.',
  IfcRectangleProfileDef:
    'IfcRectangleProfileDef defines a rectangle as the profile definition used by the swept surface geometry or the swept area solid. It is given by its X extent and its Y extent, and placed within the 2D position coordinate system, established by the Position attribute. It is placed centric within the position coordinate system.',
  IfcRectangularPyramid:
    'The IfcRectangularPyramid is a Construction Solid Geometry (CSG) 3D primitive. It is a solid with a rectangular base and a point called apex as the top. The tapers from the base to the top. The axis from the center of the base to the apex is perpendicular to the base. The inherited Position attribute defines the IfcAxisPlacement3D and provides the location and orientation of the pyramid:',
  IfcRectangularTrimmedSurface:
    'The IfcRectangularTrimmedSurface is a surface created by bounding its BasisSurface along two pairs of parallel curves defined within the parametric space of the referenced surface.',
  IfcRecurrencePattern:
    'IfcRecurrencePattern defines repetitive time periods on the basis of regular recurrences such as each Monday in a week, or every third Tuesday in a month. The population of the remaining attributes such as DayComponent, Position, and Interval depend on the specified recurrence type.',
  IfcReference:
    'This entity is used to refer to a value of an attribute on an instance. It may refer to the value of a scalar attribute or a value within a collection-based attribute. Referenced attributes may be direct values, object references, collections, inverse object references, and inverse collections. References may be chained to form a path of object-attribute references.',
  IfcRegularTimeSeries:
    'In a regular time series, the data arrives predictably at predefined intervals. In a regular time series there is no need to store multiple time stamps and the algorithms for analyzing the time series are therefore significantly simpler. Using the start time provided in the supertype, the time step is used to identify the frequency of the occurrences of the list of values.',
  IfcReinforcementBarProperties:
    'IfcReinforcementProperties defines the set of properties for a specific combination of reinforcement bar steel grade, bar type and effective depth.',
  IfcReinforcementDefinitionProperties:
    'IfcReinforcementDefinitionProperties defines the cross section properties of reinforcement included in reinforced concrete building elements. The property set definition may be used both in conjunction with insitu and precast structures.',
  IfcReinforcingBar:
    'A reinforcing bar is usually made of steel with manufactured deformations in the surface, and used in concrete and masonry construction to provide additional strength. A single instance of this class may represent one or many of actual rebars, for example a row of rebars.',
  IfcReinforcingBarType:
    'The reinforcing element type IfcReinforcingBarType defines commonly shared information for occurrences of reinforcing bars. The set of shared information may include:',
  IfcReinforcingElement:
    'A reinforcing element represents bars, wires, strands, meshes, tendons, and other components embedded in concrete in such a manner that the reinforcement and the concrete act together in resisting forces.',
  IfcReinforcingElementType:
    'The element component type IfcReinforcingElementType defines commonly shared information for occurrences of reinforcing elements. The set of shared information may include:',
  IfcReinforcingMesh:
    'A reinforcing mesh is a series of longitudinal and transverse wires or bars of various gauges, arranged at right angles to each other and welded at all points of intersection; usually used for concrete slab reinforcement. It is also known as welded wire fabric. In scope are plane meshes as well as bent meshes.',
  IfcReinforcingMeshType:
    'The reinforcing element type IfcReinforcingMeshType defines commonly shared information for occurrences of reinforcing meshs. The set of shared information may include:',
  IfcRelAggregates:
    'The aggregation relationship IfcRelAggregates is a special type of the general composition/decomposition (or whole/part) relationship IfcRelDecomposes. The aggregation relationship can be applied to all subtypes of IfcObjectDefinition.',
  IfcRelAssigns:
    'The assignment relationship, IfcRelAssigns, is a generalization of "link" relationships among instances of IfcObject and its various 1st level subtypes. A link denotes the specific association through which one object (the client) applies the services of other objects (the suppliers), or through which one object may navigate to other objects.',
  IfcRelAssignsToActor:
    'The objectified relationship IfcRelAssignsToActor handles the assignment of objects (subtypes of IfcObject) to an actor (subtypes of IfcActor).',
  IfcRelAssignsToControl:
    'The objectified relationship IfcRelAssignsToControl handles the assignment of a control (represented by subtypes of IfcControl) to other objects (represented by subtypes of IfcObject, with the exception of controls).',
  IfcRelAssignsToGroup:
    'The objectified relationship IfcRelAssignsToGroup handles the assignment of object definitions (individual object occurrences as subtypes of IfcObject, and object types as subtypes of IfcTypeObject) to a group (subtypes of IfcGroup).',
  IfcRelAssignsToGroupByFactor:
    'The objectified relationship IfcRelAssignsToGroupByFactor is a specialization of the general grouping mechanism. It allows to add a factor to define the ratio that applies to the assignment of object definitions (individual object occurrences as subtypes of IfcObject and object types as subtypes of IfcTypeObject) to a group (subtypes of IfcGroup).',
  IfcRelAssignsToProcess:
    'The objectified relationship IfcRelAssignsToProcess handles the assignment of one or many objects to a process or activity. An object can be a product that is the item the process operates on. Processes and activities can operate on things other than products, and can operate in ways other than input and output.',
  IfcRelAssignsToProduct:
    'The objectified relationship\u00a0IfcRelAssignsToProduct handles the assignment of objects (subtypes of IfcObject) to a product (subtypes of IfcProduct). The Name attribute should be used to classify the usage of the IfcRelAssignsToProduct objectified relationship. The following Name values are proposed:',
  IfcRelAssignsToResource:
    'The objectified relationship IfcRelAssignsToResource handles the assignment of objects (as subtypes of IfcObject), acting as a resource usage or consumption, to a resource (as subtypes of IfcResource).',
  IfcRelAssociates:
    'The association relationship IfcRelAssociates refers to sources of information (most notably a classification, library, document, approval, contraint, or material). The information associated may reside internally or externally of the project data. There is no dependency implied by the association.',
  IfcRelAssociatesApproval:
    'The entity IfcRelAssociatesApproval is used to apply approval information defined by IfcApproval, in IfcApprovalResource schema, to subtypes of IfcRoot.',
  IfcRelAssociatesClassification:
    'The objectified relationship IfcRelAssociatesClassification handles the assignment of a classification item (items of the select IfcClassificationSelect) to objects occurrences (subtypes of IfcObject) or object types (subtypes of IfcTypeObject).',
  IfcRelAssociatesConstraint:
    'The entity IfcRelAssociatesConstraint is used to apply constraint information defined by IfcConstraint, in the IfcConstraintResource schema, to subtypes of IfcRoot.',
  IfcRelAssociatesDocument:
    'The objectified relationship (IfcRelAssociatesDocument) handles the assignment of a document information (items of the select IfcDocumentSelect) to objects occurrences (subtypes of IfcObject) or object types (subtypes of IfcTypeObject).',
  IfcRelAssociatesLibrary:
    'The objectified relationship (IfcRelAssociatesLibrary) handles the assignment of a library item (items of the select IfcLibrarySelect) to subtypes of IfcObjectDefinition or IfcPropertyDefinition.',
  IfcRelAssociatesMaterial:
    'IfcRelAssociatesMaterial is an objectified relationship between a material definition and elements or element types to which this material definition applies.',
  IfcRelationship:
    'IfcRelationship is the abstract generalization of all objectified relationships in IFC. Objectified relationships are the preferred way to handle relationships among objects. This allows to keep relationship specific properties directly at the relationship and opens the possibility to later handle relationship specific behavior.',
  IfcRelConnects:
    'IfcRelConnects is a connectivity relationship that connects objects under some criteria. As a general connectivity it does not imply constraints, however subtypes of the relationship define the applicable object types for the connectivity relationship and the semantics of the particular connectivity.',
  IfcRelConnectsElements:
    'The IfcRelConnectsElements objectified relationship provides the generalization of the connectivity between elements. It is a 1 to 1 relationship. The concept of two elements being physically or logically connected is described independently from the connecting elements. The connectivity may be related to the shape representation of the connected entities by providing a connection geometry.',
  IfcRelConnectsPathElements:
    'The IfcRelConnectsPathElements relationship provides the connectivity information between two elements, which have path information.',
  IfcRelConnectsPorts:
    'An IfcRelConnectsPorts relationship defines the relationship that is made between two ports at their point of connection. It may include the connection geometry between two ports.',
  IfcRelConnectsPortToElement:
    'IfcRelConnectsPortToElement is a relationship between a distribution element and dynamically connected ports where connections are realised to other distribution elements.',
  IfcRelConnectsStructuralActivity:
    'The IfcRelConnectsStructuralActivity relationship connects a structural activity (either an action or reaction) to a structural member, structural connection, or element.',
  IfcRelConnectsStructuralMember:
    'The entity IfcRelConnectsStructuralMember defines all needed properties describing the connection between structural members and structural connection objects (nodes or supports).',
  IfcRelConnectsWithEccentricity:
    'The entity IfcRelConnectsWithEccentricity adds the definition of eccentricity to the connection between a structural member and a structural connection (representing either a node or support).',
  IfcRelConnectsWithRealizingElements:
    'IfcRelConnectsWithRealizingElements defines a generic relationship that is made between two elements that require the realization of that relationship by means of further realizing elements.',
  IfcRelContainedInSpatialStructure:
    'This objectified relationship, IfcRelContainedInSpatialStructure, is used to assign elements to a certain level of the spatial project structure. Any element can only be assigned once to a certain level of the spatial structure. The question, which level is relevant for which type of element, can only be answered within the context of a particular project and might vary within the various regions.',
  IfcRelCoversBldgElements:
    'The IfcRelCoversBldgElements relationship is an objectified relationship between an element and one to many coverings, which cover that element.',
  IfcRelCoversSpaces:
    'The objectified relationship, IfcRelCoversSpace, relates a space object to one or many coverings, which faces (or is assigned to) the space.',
  IfcRelDeclares:
    'The objectified relationship IfcRelDeclares handles the declaration of objects (subtypes of IfcObject) or properties (subtypes of IfcPropertyDefinition) to a project or project library (represented by IfcProject, or IfcProjectLibrary).',
  IfcRelDecomposes:
    'The decomposition relationship, IfcRelDecomposes, defines the general concept of elements being composed or decomposed. The decomposition relationship denotes a whole/part hierarchy with the ability to navigate from the whole (the composition) to the parts and vice versa.',
  IfcRelDefines: 'A generic and abstract relationship which subtypes are used to:',
  IfcRelDefinesByObject:
    'The objectified relationship IfcRelDefinesByObject defines the relationship between an object taking part in an object type decomposition and an object occurrences taking part in an occurrence decomposition of that type.',
  IfcRelDefinesByProperties:
    'The objectified relationship IfcRelDefinesByProperties defines the relationships between property set definitions and objects. Properties are aggregated in property sets. Property sets can be either directly assigned to occurrence objects using this relationship, or assigned to an object type and assigned via that type to occurrence objects. The assignment of an IfcPropertySet to an IfcTypeObject is not handled via this objectified relationship, but through the direct relationship HasPropertySets at IfcTypeObject.',
  IfcRelDefinesByTemplate:
    'The objectified relationship IfcRelDefinesByTemplate defines the relationships between property set template and property sets. Common information about property sets, e.g. the applicable name, description, contained properties, is defined by the property set template and assigned to all property sets.',
  IfcRelDefinesByType:
    'The objectified relationship IfcRelDefinesByType defines the relationship between an object type and object occurrences. The IfcRelDefinesByType is a 1-to-N relationship, as it allows for the assignment of one type information to a single or to many objects. Those objects then share the same object type, and the property sets and properties assigned to the object type.',
  IfcRelFillsElement:
    'IfcRelFillsElement is an objectified relationship between an opening element and an element that fills (or partially fills) the opening element. It is an one-to-one relationship.',
  IfcRelFlowControlElements:
    'This objectified relationship between a distribution flow element occurrence and one-to-many control element occurrences indicates that the control element(s) sense or control some aspect of the flow element. It is applied to IfcDistributionFlowElement and IfcDistributionControlElement.',
  IfcRelInterferesElements:
    'The IfcRelInterferesElements objectified relationship indicates that two elements interfere. Interference is a spatial overlap between the two elements. It is a 1 to 1 relationship. The concept of two elements interfering physically or logically is described independently from the elements. The interference may be related to the shape representation of the entities by providing an interference geometry.',
  IfcRelNests:
    'The nesting relationship IfcRelNests is a special type of the general composition/decomposition (or whole/part) relationship IfcRelDecomposes. The nesting relationship can be applied to all non physical subtypes of object and object types, namely processes, controls (like cost items), and resources. It can also be applied to physical subtypes of object and object types, namely elements having ports. The nesting implies an order among the nested parts.',
  IfcRelProjectsElement:
    'The IfcRelProjectsElement is an objectified relationship between an element and one projection element that creates a modifier to the shape of the element. The relationship is defined to be a 1:1 relationship, if an element has more than one projection, several relationship objects have to be used, each pointing to a different projection element. The IfcRelProjectsElement establishes an aggregation relationship between the main element and a sub ordinary addition feature.',
  IfcRelReferencedInSpatialStructure:
    'The objectified relationship, IfcRelReferencedInSpatialStructure is used to assign elements in addition to those levels of the project spatial\\S\\ structure, in which they are referenced, but not primarily contained. It is also used to connect a system to the relevant spatial element that it serves.',
  IfcRelSequence:
    'IfcRelSequence is a sequential relationship between processes where one process must occur before the other in time and where the timing of the relationship may be described as a type of sequence. The relating process (IfcRelSequence.RelatingProcess) is considered to be the predecessor in the relationship (has precedence) whilst the related process (IfcRelSequence.RelatedProcess) is the successor.',
  IfcRelServicesBuildings:
    'The IfcRelServicesBuildings is an objectified relationship that defines the relationship between a system and the sites, buildings, storeys, spaces, or spatial zones, it serves. Examples of systems are:',
  IfcRelSpaceBoundary:
    'The space boundary defines the physical or virtual delimiter of a space by the relationship IfcRelSpaceBoundary to the surrounding elements.',
  IfcRelSpaceBoundary1stLevel:
    'The 1st level space boundary defines the physical or virtual delimiter of a space by the relationship IfcRelSpaceBoundary1stLevel to the surrounding elements. 1st level space boundaries are characterizeda by:',
  IfcRelSpaceBoundary2ndLevel:
    'The 2nd level space boundary defines the physical or virtual delimiter of a space by the relationship IfcRelSpaceBoundary2ndLevel to the surrounding elements. 2nd level space boundaries are characterized by:',
  IfcRelVoidsElement:
    'IfcRelVoidsElement is an objectified relationship between a building element and one opening element that creates a void in the element. It is a one-to-one relationship. This relationship implies a Boolean operation of subtraction between the geometric bodies of the element and the opening.',
  IfcReparametrisedCompositeCurveSegment:
    'The IfcReparametrisedCompositeCurveSegment is geometrically identical to a IfcCompositeCurveSegment but with the additional capability of reparametrization.',
  IfcRepresentation:
    'The IfcRepresentation defines the general concept of representing product properties and in particular the product shape.',
  IfcRepresentationContext:
    'The IfcRepresentationContext defines the context to which the IfcRepresentation of a product is related.',
  IfcRepresentationItem:
    "The IfcRepresentationItem is used within an IfcRepresentation (directly or indirectly through other IfcRepresentationItem's) to represent an IfcProductRepresentation. Most commonly these IfcRepresentationItem's are geometric or topological representation items, that can (but not need to) have presentation style infomation assigned.",
  IfcRepresentationMap:
    'An IfcRepresentationMap defines the base definition (also referred to as block, cell or macro) called MappedRepresentation within the MappingOrigin. The MappingOrigin defines the coordinate system in which the MappedRepresentation is defined.',
  IfcResource:
    'IfcResource contains the information needed to represent the costs, schedule, and other impacts from the use of a thing in a process. It is not intended to use IfcResource to model the general properties of the things themselves, while an optional linkage from IfcResource to the things to be used can be specified (specifically, the relationship from subtypes of IfcResource to IfcProduct through the IfcRelAssignsToResource relationship).',
  IfcResourceApprovalRelationship:
    'An IfcResourceApprovalRelationship is used for associating an approval to resource objects. A single approval might be given to one or many items via IfcResourceObjectSelect.',
  IfcResourceConstraintRelationship:
    'An IfcResourceConstraintRelationship is a relationship entity that enables a constraint to be related to one or more resource level objects.',
  IfcResourceLevelRelationship:
    'IfcResourceLevelRelationship is an abstract base entity for relationships between resource-level entities.',
  IfcResourceTime:
    'IfcResourceTime captures the time-related information about a construction resource.',
  IfcRevolvedAreaSolid:
    'An IfcRevolvedAreaSolid is a solid created by revolving a cross section provided by a profile definition about an axis.',
  IfcRevolvedAreaSolidTapered:
    'IfcRevolvedAreaSolidTapered is defined by revolving a cross section along a circular arc. The cross section may change along the revolving sweep from the shape of the start cross section into the shape of the end cross section. Corresponding vertices of the start and end cross sections are then connected. The bounded surface may have holes which will sweep into holes in the solid.',
  IfcRightCircularCone:
    'The IfcRightCircularCone is a Construction Solid Geometry (CSG) 3D primitive. It is a solid with a circular base and a point called apex as the top. The tapers from the base to the top. The axis from the center of the circular base to the apex is perpendicular to the base. The inherited Position attribute defines the IfcAxisPlacement3D and provides the location and orientation of the cone:',
  IfcRightCircularCylinder:
    'The IfcRightCircularCylinder is a Construction Solid Geometry (CSG) 3D primitive. It is a solid with a circular base and top. The cylindrical surface between if formed by points at a fixed distance from the axis of the cylinder. The inherited Position attribute defines the IfcAxisPlacement3D and provides:',
  IfcRoof:
    'A roof is the covering of the top part of a building, it protects the building against the effects of wheather.',
  IfcRoofType:
    'The building element type IfcRoofType defines commonly shared information for occurrences of roofs. The set of shared information may include:',
  IfcRoot:
    'IfcRoot is the most abstract and root class for all entity definitions that roots in the kernel or in subsequent layers of the IFC specification. It is therefore the common supertype of all IFC entities, beside those defined in an IFC resource schema. All entities that are subtypes of IfcRoot can be used independently, whereas resource schema entities, that are not subtypes of IfcRoot, are not supposed to be independent entities.',
  IfcRoundedRectangleProfileDef:
    'IfcRoundedRectangleProfileDef defines a rectangle with equally rounded corners as the profile definition used by the swept surface geometry or the swept area solid. It is given by the X extent, the Y extent, and the radius for the rounded corners, and placed within the 2D position coordinate system, established by the Position attribute. It is placed centric within the position coordinate system, that is, in the center of the bounding box.',
  IfcSanitaryTerminal:
    'A sanitary terminal is a fixed appliance or terminal usually supplied with water and used for drinking, cleaning or foul water disposal or that is an item of equipment directly used with such an appliance or terminal.',
  IfcSanitaryTerminalType:
    'The flow terminal type IfcSanitaryTerminalType defines commonly shared information for occurrences of sanitary terminals. The set of shared information may include:',
  IfcSchedulingTime:
    'IfcSchedulingTime is the abstract supertype of entities that capture time-related information of processes.',
  IfcSeamCurve:
    'An IfcSeamCurve is a 3-dimensional curve that has additional representations provided by exactly two distinct pcurves describing the same curve at the two extreme ends of a closed parametric surface.',
  IfcSectionedSpine:
    'An IfcSectionedSpine is a representation of the shape of a three dimensional object composed by a number of planar cross sections, and a spine curve. The shape is defined between the first element of cross sections and the last element of the cross sections. A sectioned spine may be used to represent a surface or a solid but the interpolation of the shape between the cross sections is not defined.',
  IfcSectionProperties:
    'IfcSectionProperties defines the cross section properties for a single longitudinal piece of a cross section. It is a special-purpose helper class for IfcSectionReinforcementProperties.',
  IfcSectionReinforcementProperties:
    'IfcSectionReinforcementProperties defines the cross section properties of reinforcement for a single longitudinal piece of a cross section with a specific reinforcement usage type.',
  IfcSensor:
    'A sensor is a device that measures a physical quantity and converts it into a signal which can be read by an observer or by an instrument.',
  IfcSensorType:
    'The distribution control element type IfcSensorType defines commonly shared information for occurrences of sensors. The set of shared information may include:',
  IfcShadingDevice:
    'Shading devices are purpose built devices to protect from the sunlight, from natural light, or screening them from view. Shading devices can form part of the facade or can be mounted inside the building, they can be fixed or operable.',
  IfcShadingDeviceType:
    'The building element type IfcShadingDeviceType defines commonly shared information for occurrences of shading devices. The set of shared information may include:',
  IfcShapeAspect:
    'IfcShapeAspect allows for grouping of shape representation items that represent aspects (or components) of the shape of a product. Thereby shape representations of components of the product shape represent a distinctive part to a product that can be explicitly addressed.',
  IfcShapeModel:
    "IfcShapeModel represents the concept of a particular geometric and/or topological representation of a product's shape or a product component's shape within a representation context. This representation context has to be a geometric representation context (with the exception of topology representations without associated geometry). The two subtypes are IfcShapeRepresentation to cover geometric models that represent a shape, and IfcTopologyRepresentation to cover the conectivity of a product or product component. The topology may or may not have geometry associated.",
  IfcShapeRepresentation:
    "The IfcShapeRepresentation represents the concept of a particular geometric representation of a product or a product component within a specific geometric representation context. The inherited attribute RepresentationType is used to define the geometric model used for the shape representation (e.g. 'SweptSolid', or 'Brep'), the inherited attribute RepresentationIdentifier is used to denote the kind of the representation captured by the IfcShapeRepresentation (e.g. 'Axis', 'Body', etc.).",
  IfcShellBasedSurfaceModel:
    'An IfcShellBasedSurfaceModel represents the shape by a set of open or closed shells. The connected faces within the shell have a dimensionality 2 and are placed in a coordinate space of dimensionality 3.',
  IfcSimpleProperty:
    'IfcSimpleProperty is a generalization of a single property object. The various subtypes of IfcSimpleProperty establish different ways in which a property value can be set.',
  IfcSimplePropertyTemplate:
    'The IfcSimplePropertyTemplate defines the template for all dynamically extensible properties, either the subtypes of IfcSimpleProperty, or the subtypes of IfcPhysicalSimpleQuantity. The individual property templates are interpreted according to their Name attribute and may have a predefined template type, property units, and property measure types. The correct interpretation of the attributes:',
  IfcSite:
    'A site is a defined area of land, possibly covered with water, on which the project construction is to be completed. A site may be used to erect, retrofit or turn down building(s), or for other construction related developments.',
  IfcSIUnit:
    'The IfcSIUnit covers both standard base SI units such as meter and second, and derived SI units such as Pascal, square meter and cubic meter.',
  IfcSlab:
    'A slab is a component of the construction that may enclose a space vertically. The slab may provide the lower support (floor) or upper construction (roof slab) in any space in a building.',
  IfcSlabElementedCase:
    'The IfcSlabElementedCase defines a slab with certain constraints for the provision of its components. The IfcSlabElementedCase handles all cases of slabs, that are decomposed into parts:',
  IfcSlabStandardCase:
    'The standard slab, IfcSlabStandardCase, defines a slab with certain constraints for the provision of material usage, parameters and with certain constraints for the geometric representation. The IfcSlabStandardCase handles all cases of slabs, that:',
  IfcSlabType:
    'The element type IfcSlabType defines commonly shared information for occurrences of slabs. The set of shared information may include:',
  IfcSlippageConnectionCondition:
    'Describes slippage in support conditions or connection conditions. Slippage means that a relative displacement may occur in a support or connection before support or connection reactions are awoken.',
  IfcSolarDevice:
    'A solar device converts solar radiation into other energy such as electric current or thermal energy.',
  IfcSolarDeviceType:
    'The energy conversion device type IfcSolarDeviceType defines commonly shared information for occurrences of solar devices. The set of shared information may include:',
  IfcSolidModel:
    'An IfcSolidModel represents the 3D shape by different types of solid model representations. It is the common abstract supertype of Boundary representation, CSG representation, Sweeping representation and other suitable solid representation schemes.',
  IfcSpace:
    'A space represents an area or volume bounded actually or theoretically. Spaces are areas or volumes that provide for certain functions within a building.',
  IfcSpaceHeater:
    'Space heaters utilize a combination of radiation and/or natural convection using a heating source such as electricity, steam or hot water to heat a limited space or area. Examples of space heaters include radiators, convectors, baseboard and finned-tube heaters.',
  IfcSpaceHeaterType:
    'The flow terminal type IfcSpaceHeaterType defines commonly shared information for occurrences of space heaters. The set of shared information may include:',
  IfcSpaceType:
    'A space represents an area or volume bounded actually or theoretically. Spaces are areas or volumes that provide for certain functions within a building.',
  IfcSpatialElement:
    'A spatial element is the generalization of all spatial elements that might be used to define a spatial structure or to define spatial zones.',
  IfcSpatialElementType:
    'IfcSpatialElementType defines a list of commonly shared property set definitions of a spatial structure element and an optional set of product representations. It is used to define a spatial element specification (the specific element information, that is common to all occurrences of that element type).',
  IfcSpatialStructureElement:
    'A spatial structure element is the generalization of all spatial elements that might be used to define a spatial structure. That spatial structure is often used to provide a project structure to organize a building project.',
  IfcSpatialStructureElementType:
    'The element type (IfcSpatialStructureElementType) defines a list of commonly shared property set definitions of a spatial structure element and an optional set of product representations. It is used to define an element specification (i.e. the specific element information, that is common to all occurrences of that element type).',
  IfcSpatialZone:
    'A spatial zone is a non-hierarchical and potentially overlapping decomposition of the project under some functional consideration. A spatial zone might be used to represent a thermal zone, a construction zone, a lighting zone, a usable area zone. A spatial zone might have its independent placement and shape representation.',
  IfcSpatialZoneType:
    'The IfcSpatialZoneType defines a list of commonly shared property set definitions of a space and an optional set of product representations. It is used to define a space specification (i.e. the specific space information, that is common to all occurrences of that space type).',
  IfcSphere:
    'The IfcSphere is a Construction Solid Geometry (CSG) 3D primitive. It is a solid where all points at the surface have the same distance from the center point. The inherited Position attribute defines the IfcAxisPlacement3D and provides:',
  IfcSphericalSurface:
    'The IfcSphericalSurface is a bounded elementary surface. The inherited Position attribute defines the IfcAxisPlacement3D and provides:',
  IfcStackTerminal:
    'A stack terminal is placed at the top of a ventilating stack (such as to prevent ingress by birds or rainwater) or rainwater pipe (to act as a collector or hopper for discharge from guttering).',
  IfcStackTerminalType:
    'The flow terminal type IfcStackTerminalType defines commonly shared information for occurrences of stack terminals. The set of shared information may include:',
  IfcStair:
    'A stair is a vertical passageway allowing occupants to walk (step) from one floor level to another floor level at a different elevation. It may include a landing as an intermediate floor slab.',
  IfcStairFlight:
    'A stair flight is an assembly of building components in a single "run" of stair steps (not interrupted by a landing). The stair steps and any stringers are included in the stair flight. A winder is also regarded a part of a stair flight.',
  IfcStairFlightType:
    'The building element type IfcStairFlightType defines commonly shared information for occurrences of stair flights. The set of shared information may include:',
  IfcStairType:
    'The building element type IfcStairType defines commonly shared information for occurrences of stairs. The set of shared information may include:',
  IfcStructuralAction:
    'A structural action is a structural activity that acts upon a structural item or building element.',
  IfcStructuralActivity:
    'The abstract entity IfcStructuralActivity combines the definition of actions (such as forces, displacements, etc.) and reactions (support reactions, internal forces, deflections, etc.) which are specified by using the basic load definitions from the IfcStructuralLoadResource.',
  IfcStructuralAnalysisModel:
    'The IfcStructuralAnalysisModel is used to assemble all information needed to represent a structural analysis model. It encompasses certain general properties (such as analysis type), references to all contained structural members, structural supports or connections, as well as loads and the respective load results.',
  IfcStructuralConnection:
    'An IfcStructuralConnection represents a structural connection object (node connection, edge connection, or surface connection) or supports.',
  IfcStructuralConnectionCondition: 'Describe more rarely needed connection properties.',
  IfcStructuralCurveAction:
    'A structural curve action defines an action which is distributed over a curve. A curve action may be connected with a curve member or curve connection, or surface member or surface connection.',
  IfcStructuralCurveConnection:
    "Instances of IfcStructuralCurveConnection describe edge 'nodes', i.e. edges where two or more surface members are joined, or edge supports. Edge curves may be straight or curved.",
  IfcStructuralCurveMember:
    'Instances of IfcStructuralCurveMember describe edge members, i.e. structural analysis idealizations of beams, columns, rods etc.. Curve members may be straight or curved.',
  IfcStructuralCurveMemberVarying:
    'This entity describes edge members with varying profile properties. Each instance of IfcStructuralCurveMemberVarying is composed of two or more instances of IfcStructuralCurveMember with differing profile properties. These subordinate members relate to the instance of IfcStructuralCurveMemberVarying by IfcRelAggregates.',
  IfcStructuralCurveReaction:
    'This entity defines a reaction which occurs distributed over a curve. A curve reaction may be connected with a curve member or curve connection, or surface member or surface connection.',
  IfcStructuralItem:
    'The abstract entity IfcStructuralItem is the generalization of structural members and structural connections, that is, analysis idealizations of elements in the building model. It defines the relation between structural members and connections with structural activities (actions and reactions).',
  IfcStructuralLinearAction:
    'This entity defines an action with constant value which is distributed over a curve.',
  IfcStructuralLoad:
    'This abstract entity is the supertype of all loads (actions or reactions) or of certain requirements resulting from structural analysis, or certain provisions which influence structural analysis.',
  IfcStructuralLoadCase:
    'A load case is a load group, commonly used to group loads from the same action source.',
  IfcStructuralLoadConfiguration:
    'This class combines one or more load or result values in a 1- or 2-dimensional configuration.',
  IfcStructuralLoadGroup:
    'The entity IfcStructuralLoadGroup is used to structure the physical impacts. By using the grouping features inherited from IfcGroup, instances of IfcStructuralAction (or its subclasses) and of IfcStructuralLoadGroup can be used to define load groups, load cases and load combinations. (See also IfcLoadGroupTypeEnum.)',
  IfcStructuralLoadLinearForce:
    'An instance of the entity IfcStructuralLoadLinearForce shall be used to define actions on curves.',
  IfcStructuralLoadOrResult: 'Abstract superclass of simple load or result classes.',
  IfcStructuralLoadPlanarForce:
    'An instance of the entity IfcStructuralLoadPlanarForce shall be used to define actions on faces.',
  IfcStructuralLoadSingleDisplacement:
    'Instances of the entity IfcStructuralLoadSingleDisplacement shall be used to define displacements.',
  IfcStructuralLoadSingleDisplacementDistortion: 'Defines a displacement with warping.',
  IfcStructuralLoadSingleForce:
    'Instances of the entity IfcStructuralLoadSingleForce shall be used to define the forces and moments of an action operating on a single point.',
  IfcStructuralLoadSingleForceWarping:
    'Instances of the entity IfcStructuralLoadSingleForceWarping, as a subtype of IfcStructuralLoadSingleForce, shall be used to define an action operation on a single point. In addition to forces and moments defined by its supertype a warping moment can be defined.',
  IfcStructuralLoadStatic:
    'The abstract entity IfcStructuralLoadStatic is the supertype of all static loads (actions or reactions) which can be defined. Within scope are single i.e. concentrated forces and moments, linear i.e. one-dimensionally distributed forces and moments, planar i.e. two-dimensionally distributed forces, furthermore displacements and temperature loads.',
  IfcStructuralLoadTemperature:
    'An instance of the entity IfcStructuralLoadTemperature shall be used to define actions which are caused by a temperature change. As shown in Figure 430, the change of temperature is given with a constant value which is applied to the complete section and values for temperature differences between outer fibres of the section.',
  IfcStructuralMember:
    'The abstract entity IfcStructuralMember is the superclass of all structural items which represent the idealized structural behavior of building elements.',
  IfcStructuralPlanarAction:
    'This entity defines an action with constant value which is distributed over a surface.',
  IfcStructuralPointAction:
    'This entity defines an action which acts on a point. A point action is typically connected with a point connection. It may also be connected with a curve member or curve connection, or surface member or surface connection.',
  IfcStructuralPointConnection:
    'Instances of IfcStructuralPointConnection describe structural nodes or point supports.',
  IfcStructuralPointReaction:
    'This entity defines a reaction which occurs at a point. A point reaction is typically connected with a point connection. It may also be connected with a curve member or curve connection, or surface member or surface connection.',
  IfcStructuralReaction:
    'A structural reaction is a structural activity that results from a structural action imposed to a structural item or building element. Examples are support reactions, internal forces, and deflections.',
  IfcStructuralResultGroup:
    'Instances of the entity IfcStructuralResultGroup are used to group results of structural analysis calculations and to capture the connection to the underlying basic load group. The basic functionality for grouping inherited from IfcGroup is used to collect instances from IfcStructuralReaction or its respective subclasses.',
  IfcStructuralSurfaceAction:
    'This entity defines an action which is distributed over a surface. A surface action may be connected with a surface member or surface connection.',
  IfcStructuralSurfaceConnection:
    "Instances of IfcStructuralSurfaceConnection describe face 'nodes', i.e. faces where two or more surface members are joined, or face supports. Face surfaces may be planar or curved.",
  IfcStructuralSurfaceMember:
    'Instances of IfcStructuralSurfaceMember describe face members, that is, structural analysis idealizations of slabs, walls, and shells. Surface members may be planar or curved.',
  IfcStructuralSurfaceMemberVarying:
    'This entity describes surface members with varying section properties. The properties are provided by means of Pset_StructuralSurfaceMemberVaryingThickness via IfcRelDefinesByProperties, or by means of aggregation: An instance of IfcStructuralSurfaceMemberVarying may be composed of two or more instances of IfcStructuralSurfaceMember with differing section properties. These subordinate members relate to the instance of IfcStructuralSurfaceMemberVarying by IfcRelAggregates.',
  IfcStructuralSurfaceReaction:
    'This entity defines a reaction which occurs distributed over a surface. A surface reaction may be connected with a surface member or surface connection.',
  IfcStyledItem:
    'The IfcStyledItem holds presentation style information for products, either explicitly for an IfcGeometricRepresentationItem being part of an IfcShapeRepresentation assigned to a product, or by assigning presentation information to IfcMaterial being assigned as other representation for a product.',
  IfcStyledRepresentation:
    'The IfcStyledRepresentation represents the concept of a styled presentation being a representation of a product or a product component, like material. within a representation context. This representation context does not need to be (but may be) a geometric representation context.',
  IfcStyleModel:
    'IfcStyleModel represents the concept of a particular presentation style defined for a material (or other characteristic) of a product or a product component within a representation context. This representation context may (but has not to be) a geometric representation context.',
  IfcSubContractResource:
    'IfcSubContractResource is a construction resource needed in a construction process that represents a sub-contractor.',
  IfcSubContractResourceType:
    'The resource type IfcSubContractResourceType defines commonly shared information for occurrences of subcontract resources. The set of shared information may include:',
  IfcSubedge: '',
  IfcSurface:
    'An IfcSurface is a 2-dimensional representation item positioned in 3-dimensional space. 2-dimensional means that each point at the surface can be defined by a 2-dimensional coordinate system, usually by u and v coordinates.',
  IfcSurfaceCurve:
    'An IfcSurfaceCurve is a 3-dimensional curve that has additional representations provided by one or two pcurves.',
  IfcSurfaceCurveSweptAreaSolid:
    "The IfcSurfaceCurveSweptAreaSolid is the result of sweeping an area along a directrix that lies on a reference surface. The swept area is provided by a subtype of IfcProfileDef. The profile is placed by an implicit cartesian transformation operator at the start point of the sweep, where the profile normal agrees to the tangent of the directrix at this point, and the profile''s x-axis agrees to the surface normal. At any point along the directrix, the swept profile origin lies on the directrix, the profile''s normal points towards the tangent of the directrix, and the profile''s x-axis is identical to the surface normal at this point.",
  IfcSurfaceFeature:
    'A surface feature is a modification at (onto, or into) of the surface of an element. Parts of the surface of the entire surface may be affected. The volume and mass of the element may be increased, remain unchanged, or be decreased by the surface feature, depending on manufacturing technology. However, any increase or decrease of volume is small compared to the total volume of the element.',
  IfcSurfaceOfLinearExtrusion:
    'The IfcSurfaceOfLinearExtrusion is a surface derived by sweeping a curve along a vector.',
  IfcSurfaceOfRevolution:
    'The IfcSurfaceOfRevolution is a surface derived by rotating a curve about an axis.',
  IfcSurfaceReinforcementArea:
    'Describes required or provided reinforcement area of surface members.',
  IfcSurfaceStyle:
    'IfcSurfaceStyle is an assignment of one or many surface style elements to a surface, defined by subtypes of IfcSurface, IfcFaceBasedSurfaceModel, IfcShellBasedSurfaceModel, or by subtypes of IfcSolidModel. The positive direction of the surface normal relates to the positive side. In case of solids the outside of the solid is to be taken as positive side.',
  IfcSurfaceStyleLighting:
    'IfcSurfaceStyleLighting is a container class for properties for calculation of physically exact illuminance related to a particular surface style.',
  IfcSurfaceStyleRefraction:
    'IfcSurfaceStyleRefraction extends the surface style lighting, or the surface style rendering definition for properties for calculation of physically exact illuminance by adding seldomly used properties. Currently this includes the refraction index (by which the light ray refracts when passing through a prism) and the dispersion factor (or Abbe constant) which takes into account the wavelength dependency of the refraction.',
  IfcSurfaceStyleRendering:
    'IfcSurfaceStyleRendering holds the properties for visualization related to a particular surface side style. It allows rendering properties to be defined by:',
  IfcSurfaceStyleShading:
    'The IfcSurfaceStyleShading allows for colour information and transparency used for shading and simple rendering. The surface colour is used for colouring or simple shading of the assigned surfaces and the transparency for identifying translucency, where 0.0 is completely opaque, and 1.0 is completely transparent.',
  IfcSurfaceStyleWithTextures:
    'The entity IfcSurfaceStyleWithTextures allows to include image textures in surface styles. These image textures can be applied repeating across the surface or mapped with a particular scale upon the surface.',
  IfcSurfaceTexture:
    'An IfcSurfaceTexture provides a 2-dimensional image-based texture map. It can either be given by referencing an external image file through an URL reference (IfcImageTexture), including the image file as a blob (long binary) into the data set (IfcBlobTexture), or by explicitly including an array of pixels (IfcPixelTexture).',
  IfcSweptAreaSolid:
    'An IfcSweptAreaSolid represents the 3D shape by a sweeping representation scheme allowing a two dimensional planar cross section to sweep through space.',
  IfcSweptDiskSolid:
    'An IfcSweptDiskSolid represents the 3D shape by a sweeping representation scheme allowing a two dimensional circularly bounded plane to sweep along a three dimensional Directrix through space.',
  IfcSweptDiskSolidPolygonal:
    'The IfcSweptDiskSolidPolygonal is a IfcSweptDiskSolid where the Directrix is restricted to be provided by an poly line only. An optional FilletRadius attribute can be asserted, it is then applied as a fillet to all transitions between the segments of the poly line.',
  IfcSweptSurface:
    'An IfcSweptSurface is a surface defined by sweeping a curve. The swept surface is defined by a open or closed curve, represented by a subtype if IfcProfileDef, that is provided as a two-dimensional curve on an implicit plane, and by the sweeping operation.',
  IfcSwitchingDevice:
    'A switch is used in a cable distribution system (electrical circuit) to control or modulate the flow of electricity.',
  IfcSwitchingDeviceType:
    'The flow controller type IfcSwitchingDeviceType defines commonly shared information for occurrences of switching devices. The set of shared information may include:',
  IfcSystem:
    'A system is an organized combination of related parts within an AEC product, composed for a common purpose or function or to provide a service. A system is essentially a functionally related aggregation of products. The grouping relationship to one or several instances of IfcProduct (the system members) is handled by IfcRelAssignsToGroup.',
  IfcSystemFurnitureElement:
    'A system furniture element defines components of modular furniture which are not directly placed in a building structure but aggregated inside furniture.',
  IfcSystemFurnitureElementType:
    'The furnishing element type IfcSystemFurnitureElementType defines commonly shared information for occurrences of system furniture elements. The set of shared information may include:',
  IfcTable:
    'An IfcTable is a data structure for the provision of information in the form of rows and columns. Each instance may have IfcTableColumn instances that define the name, description and units for each column. The rows of information are stored as a list of IfcTableRow objects.',
  IfcTableColumn:
    'An IfcTableColumn is a data structure that captures column information for use in an IfcTable. Each instance defines the identifier, name, description, and units of measure that are applicable to the columnar data associated with the IfcTableRow objects.',
  IfcTableRow: 'IfcTableRow contains data for a single row within an IfcTable.',
  IfcTank: 'A tank is a vessel or container in which a fluid or gas is stored for later use.',
  IfcTankType:
    'The flow storage device type IfcTankType defines commonly shared information for occurrences of tanks. The set of shared information may include:',
  IfcTask:
    'An IfcTask is an identifiable unit of work to be carried out in a construction project.',
  IfcTaskTime:
    'IfcTaskTime captures the time-related information about a task including the different types (actual or scheduled) of starting and ending times.',
  IfcTaskTimeRecurring:
    'IfcTaskTimeRecurring is a recurring instance of IfcTaskTime for handling regularly scheduled or repetitive tasks.',
  IfcTaskType:
    'An IfcTaskType defines a particular type of task that may be specified for use within a work control.',
  IfcTelecomAddress:
    'This entity represents an address to which telephone, electronic mail and other forms of telecommunications should be addressed.',
  IfcTendon:
    'A tendon is a steel element such as a wire, cable, bar, rod, or strand used to impart prestress to concrete when the element is tensioned.',
  IfcTendonAnchor:
    'A tendon anchor is the end connection for tendons in prestressed or posttensioned concrete.',
  IfcTendonAnchorType:
    'The reinforcing element type IfcTendonAnchorType defines commonly shared information for occurrences of tendon anchors. The set of shared information may include:',
  IfcTendonType:
    'The reinforcing element type IfcTendonType defines commonly shared information for occurrences of tendons. The set of shared information may include:',
  IfcTessellatedFaceSet:
    'The IfcTessellatedFaceSet is a boundary representation topological model limited to planar faces and straight edges. It may represent an approximation of an analytical surface or solid that may be provided in addition to its tessellation as a separate shape representation. The IfcTessellatedFaceSet provides a compact data representation of an connected face set using indices into ordered lists of vertices, normals, colours, and texture maps.',
  IfcTessellatedItem:
    'The IfcTessellatedItem is the abstract supertype of all tessellated geometric models.',
  IfcTextLiteral:
    'The text literal is a geometric representation item which describes a text string using a string literal and additional position and path information. The text size and appearance is determined by the IfcTextStyle that is associated to the IfcTextLiteral through an IfcStyledItem.',
  IfcTextLiteralWithExtent:
    'The text literal with extent is a text literal with the additional explicit information of the planar extent. An alignment attribute defines how the text box is aligned to the placement and how it may expand if additional lines of text need to be added.',
  IfcTextStyle:
    "The IfcTextStyle is a presentation style for annotations that place a text in model space. The IfcTextStyle provides the text style for presentation information assigned to IfcTextLiteral's. The style is defined by color, text font characteristics, and text box characteristics.",
  IfcTextStyleFontModel: '',
  IfcTextStyleForDefinedFont:
    'The IfcTextStyleForDefinedFont combines the text font color with an optional background color, that fills the text box, defined by the planar extent given to the text literal.',
  IfcTextStyleTextModel:
    'The IfcTextStyleTextModel combines all text style properties, that affect the presentation of a text literal within a given extent. It includes the spacing between characters and words, the horizontal and vertical alignment of the text within the planar box of the extent, decorations (like underline), transformations of the literal (like uppercase), and the height of each text line within a multi-line text block.',
  IfcTextureCoordinate:
    'The IfcTextureCoordinate is an abstract supertype of the different kinds to apply texture coordinates to geometries. For vertex based geometries an explicit assignment of 2D texture vertices to the 3D geometry points is supported by the subtype IfcTextureMap, in addition there can be a procedural description of how texture coordinates shall be applied to geometric items. If no IfcTextureCoordinate is provided for the IfcSurfaceTexture, the default mapping shall be used.',
  IfcTextureCoordinateGenerator:
    'The IfcTextureCoordinateGenerator describes a procedurally defined mapping function with input parameter to map 2D texture coordinates to 3D geometry vertices. The allowable Mode values and input Parameter need to be agreed upon in view definitions and implementer agreements.',
  IfcTextureMap:
    'An IfcTextureMap provides the mapping of the 2-dimensional texture coordinates to the surface onto which it is mapped. It is used for mapping the texture to surfaces of vertex based geometry models, such as',
  IfcTextureVertex: 'An IfcTextureVertex is a list of 2 (S, T) texture coordinates.',
  IfcTextureVertexList:
    'The IfcTextureVertexList defines an ordered collection of texture vertices. Each texture vertex is a two-dimensional vertex provided by a fixed list of two texture coordinates. The attribute TexCoordsList is a two-dimensional list, where',
  IfcTimePeriod:
    'IfcTimePeriod defines a time period given by a start and end time. Both time definitions consider the time zone and allow for the daylight savings offset.',
  IfcTimeSeries:
    'A time series is a set of a time-stamped data entries. It allows a natural association of data collected over intervals of time. Time series can be regular or irregular. In regular time series data arrive predictably at predefined intervals. In irregular time series some or all time stamps do not follow a repetitive pattern and unpredictable bursts of data may arrive at unspecified points in time.',
  IfcTimeSeriesValue:
    'A time series value is a list of values that comprise the time series. At least one value must be supplied. Applications are expected to normalize values by applying the following three rules:',
  IfcTopologicalRepresentationItem: '',
  IfcTopologyRepresentation:
    'IfcTopologyRepresentation represents the concept of a particular topological representation of a product or a product component within a representation context. This representation context does not need to be (but may be) a geometric representation context. Several representation types for shape representation are included as predefined types:',
  IfcToroidalSurface:
    'The IfcToroidalSurface is a bounded elementary surface. It is constructed by completely revolving a circle around an axis line. The inherited Position attribute defines the IfcAxisPlacement3D and provides:',
  IfcTransformer:
    'A transformer is an inductive stationary device that transfers electrical energy from one circuit to another.',
  IfcTransformerType:
    'The energy conversion device type IfcTransformerType defines commonly shared information for occurrences of transformers. The set of shared information may include:',
  IfcTransportElement:
    'A transport element is a generalization of all transport related objects that move people, animals or goods within a REMOVE {building or building complex} Facility. The IfcTransportElement defines the occurrence of a transport element, that (if given), is expressed by the IfcTransportElementType .',
  IfcTransportElementType:
    'The element type IfcTransportElementType  defines commonly shared information for occurrences of transport elements. The set of shared information may include:',
  IfcTrapeziumProfileDef:
    'IfcTrapeziumProfileDef defines a trapezium as the profile definition used by the swept surface geometry or the swept area solid. It is given by its Top X and Bottom X extent and its Y extent as well as by the offset of the Top X extend, and placed within the 2D position coordinate system, established by the Position attribute. It is placed centric within the position coordinate system, that is, in the center of the bounding box.',
  IfcTriangulatedFaceSet:
    'The IfcTriangulatedFaceSet is a tessellated face set with all faces being bound by triangles. The faces are constructed by implicit polylines defined by three Cartesian points. Depending on the value of the attribute Closed the instance of IfcTriangulatedFaceSet represents:',
  IfcTrimmedCurve:
    'An IfcTrimmedCurve is a bounded curve that is trimmed at both ends. The trimming points may be provided by a Cartesian point or by a parameter value, based on the parameterization of the BasisCurve. The SenseAgreement attribute indicates whether the direction of the IfcTrimmedCurve agrees with or is opposed to the direction of the BasisCurve.',
  IfcTShapeProfileDef:
    "IfcTShapeProfileDef defines a section profile that provides the defining parameters of a T-shaped section to be used by the swept area solid. Its parameters and orientation relative to the position coordinate system are according to the following illustration. The centre of the position coordinate system is in the profile's centre of the bounding box.",
  IfcTubeBundle:
    'A tube bundle is a device consisting of tubes and bundles of tubes used for heat transfer and contained typically within other energy conversion devices, such as a chiller or coil.',
  IfcTubeBundleType:
    'The energy conversion device type IfcTubeBundleType defines commonly shared information for occurrences of tube bundles. The set of shared information may include:',
  IfcTypeObject:
    'The object type defines the specific information about a type, being common to all occurrences of this type. It refers to the specific level of the well recognized generic - specific - occurrance modeling paradigm. The IfcTypeObject gets assigned to the individual object instances (the occurrences) via the IfcRelDefinesByType relationship.',
  IfcTypeProcess:
    'IfcTypeProcess defines a specific (or type) definition of a process or activity without being assigned to a schedule or a time.\u00a0It is used to define a process or activity specification, that is, the specific process or activity information that is common to all occurrences that are defined for that process or activity type.',
  IfcTypeProduct:
    'IfcTypeProduct defines a type definition of a product without being already inserted into a project structure (without having a placement), and not being included in the geometric representation context of the project.\u00a0It is used to define a product specification, that is, the specific product information that is common to all occurrences of that product type.',
  IfcTypeResource:
    'IfcTypeResource defines a specific (or type) definition of a resource.\u00a0It is used to define a resource specification (the specific resource, that is common to all occurrences that are defined for that resource) and could act as a resource template.',
  IfcUnitaryControlElement:
    'A unitary control element combines a number of control components into a single product, such as a thermostat or humidistat.',
  IfcUnitaryControlElementType:
    'The distribution control element type IfcUnitaryControlElementType defines commonly shared information for occurrences of unitary control elements. The set of shared information may include:',
  IfcUnitaryEquipment:
    'Unitary equipment typically combine a number of components into a single product, such as air handlers, pre-packaged rooftop air-conditioning units, heat pumps, and split systems.',
  IfcUnitaryEquipmentType:
    'The energy conversion device type IfcUnitaryEquipmentType defines commonly shared information for occurrences of unitary equipments. The set of shared information may include:',
  IfcUnitAssignment:
    'IfcUnitAssignment indicates a set of units which may be assigned. Within an IfcUnitAssigment each unit definition shall be unique; that is, there shall be no redundant unit definitions for the same unit type such as length unit or area unit. For currencies, there shall be only a single IfcMonetaryUnit within an IfcUnitAssignment.',
  IfcUShapeProfileDef:
    "IfcUShapeProfileDef defines a section profile that provides the defining parameters of a U-shape (channel) section to be used by the swept area solid. Its parameters and orientation relative to the position coordinate system are according to the following illustration. The centre of the position coordinate system is in the profile's centre of the bounding box.",
  IfcValve:
    'A valve is used in a building services piping distribution system to control or modulate the flow of the fluid.',
  IfcValveType:
    'The flow controller type IfcValveType defines commonly shared information for occurrences of valves. The set of shared information may include:',
  IfcVector:
    'An IfcVector is a geometric representation item having both a magnitude and direction. The magnitude of the vector is solely defined by the Magnitude attribute and the direction is solely defined by the Orientation attribute.',
  IfcVertex: '',
  IfcVertexLoop: '',
  IfcVertexPoint: '',
  IfcVibrationIsolator:
    'A vibration isolator is a device used to minimize the effects of vibration transmissibility in a structure.',
  IfcVibrationIsolatorType:
    'The element component type IfcVibrationIsolatorType defines commonly shared information for occurrences of vibration isolators. The set of shared information may include:',
  IfcVirtualElement:
    'A virtual element is a special element used to provide imaginary boundaries, such as between two adjacent, but not separated, spaces. Virtual elements are usually not displayed and does not have quantities and other measures. Therefore IfcVirtualElement does not have material information and quantities attached.',
  IfcVirtualGridIntersection:
    'IfcVirtualGridIntersection defines the derived location of the intersection between two grid axes. Offset values may be given to set an offset distance to the grid axis for the calculation of the virtual grid intersection.',
  IfcVoidingFeature:
    'A voiding feature is a modification of an element which reduces its volume. Such a feature may be manufactured in different ways, for example by cutting, drilling, or milling of members made of various materials, or by inlays into the formwork of cast members made of materials such as concrete.',
  IfcWall:
    'The wall represents a vertical construction that may bound or subdivide spaces. Wall are usually vertical, or nearly vertical, planar elements, often designed to bear structural loads. A wall is however\u00a0not required to be load bearing.',
  IfcWallElementedCase:
    'The IfcWallElementedCase defines a wall with certain constraints for the provision of its components. The IfcWallElementedCase handles all cases of walls, that are decomposed into parts:',
  IfcWallStandardCase:
    'The IfcWallStandardCase defines a wall with certain constraints for the provision of parameters and with certain constraints for the geometric representation. The IfcWallStandardCase handles all cases of walls, that are extruded vertically:',
  IfcWallType:
    'The element type IfcWallType defines commonly shared information for occurrences of walls.',
  IfcWasteTerminal:
    'A waste terminal has the purpose of collecting or intercepting waste from one or more sanitary terminals or other fluid waste generating equipment and discharging it into a single waste/drainage system.',
  IfcWasteTerminalType:
    'The flow terminal type IfcWasteTerminalType defines commonly shared information for occurrences of waste terminals. The set of shared information may include:',
  IfcWindow:
    'The window is a building element that is predominately used to provide natural light and fresh air. It includes vertical opening but also horizontal opening such as skylights or light domes. It includes constructions with swinging, pivoting, sliding, or revolving panels and fixed panels. A window consists of a lining and one or several panels.',
  IfcWindowLiningProperties:
    'The window lining is the outer frame which enables the window to be fixed in position. The window lining is used to hold the window panels or other casements. The parameter of the IfcWindowLiningProperties define the geometrically relevant parameter of the lining.',
  IfcWindowPanelProperties:
    'A window panel is a casement, that is, a component, fixed or opening, consisting essentially of a frame and the infilling. The infilling of a window panel is normally glazing. The way of operation is defined in the operation type.',
  IfcWindowStandardCase:
    'The standard window, IfcWindowStandardCase, defines a window with certain constraints for the provision of operation types, opening directions, frame and lining parameters, construction types and with certain constraints for the geometric representation. The IfcWindowStandardCase handles all cases of windows, that:',
  IfcWindowStyle:
    'The window style defines a particular style of windows, which may be included into the spatial context of the building model through instances of IfcWindow. A window style defines the overall parameter of the window style and refers to the particular parameter of the lining and one (or several) panels through IfcWindowLiningProperties and IfcWindowPanelProperties.',
  IfcWindowType:
    'The element type IfcWindowType defines commonly shared information for occurrences of windows. The set of shared information may include:',
  IfcWorkCalendar:
    'An IfcWorkCalendar defines working and non-working time periods for tasks and resources. It enables to define both specific time periods, such as from 7:00 till 12:00 on 25th August 2009, as well as repetitive time periods based on frequently used recurrence patterns, such as each Monday from 7:00 till 12:00 between 1st March 2009 and 31st December 2009.',
  IfcWorkControl:
    'An IfcWorkControl is an abstract supertype which captures information that is common to both IfcWorkPlan and IfcWorkSchedule.',
  IfcWorkPlan:
    'An IfcWorkPlan represents work plans in a construction or a facilities management project.',
  IfcWorkSchedule:
    'An IfcWorkSchedule represents a task schedule of a work plan, which in turn can contain a set of schedules for different purposes.',
  IfcWorkTime:
    'IfcWorkTime defines time periods that are used by IfcWorkCalendar for either describing working times or non-working exception times. Besides start and finish dates, a set of time periods can be given by various types of recurrence patterns.',
  IfcZone:
    "A zone is\u00a0a group of spaces, partial spaces or other zones. Zone structures may not be hierarchical (in contrary to the spatial structure of a project - see IfcSpatialStructureElement), i.e. one individual IfcSpace may be associated with zero, one, or several IfcZone's. IfcSpace's are grouped into an IfcZone by using the objectified relationship IfcRelAssignsToGroup as specified at the supertype IfcGroup.",
  IfcZShapeProfileDef:
    "IfcZShapeProfileDef defines a section profile that provides the defining parameters of a Z-shape section to be used by the swept area solid. Its parameters and orientation relative to the position coordinate system are according to the following illustration. The centre of the position coordinate system is in the profile's centre of the bounding box."
}

export { IFCElementDescriptions }