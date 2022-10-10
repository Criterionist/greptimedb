use std::sync::Arc;

use arrow::array::{Array, MutableArray};
use snafu::ensure;

use self::point::{PointVector, PointVectorBuilder};
use super::{MutableVector, Vector};
use crate::{
    data_type::ConcreteDataType,
    error,
    prelude::{ScalarVector, ScalarVectorBuilder},
    serialize::Serializable,
    value::GeometryValue,
};

mod point;
#[derive(Debug, Clone, PartialEq)]
pub enum GeometryVector {
    PointVector(PointVector),
}

impl Vector for GeometryVector {
    fn data_type(&self) -> crate::data_type::ConcreteDataType {
        ConcreteDataType::geometry_datatype()
    }

    fn vector_type_name(&self) -> String {
        "GeometryVector".to_string()
    }

    fn as_any(&self) -> &dyn std::any::Any {
        self
    }

    fn len(&self) -> usize {
        match self {
            GeometryVector::PointVector(vec) => vec.array.len(),
        }
    }

    fn to_arrow_array(&self) -> arrow::array::ArrayRef {
        match self {
            GeometryVector::PointVector(vec) => Arc::new(vec.array.clone()),
        }
    }

    fn to_boxed_arrow_array(&self) -> Box<dyn arrow::array::Array> {
        match self {
            GeometryVector::PointVector(vec) => Box::new(vec.array.clone()),
        }
    }

    fn validity(&self) -> super::Validity {
        todo!()
    }

    fn memory_size(&self) -> usize {
        match self {
            GeometryVector::PointVector(point_vector) => point_vector.memory_size(),
        }
    }

    fn is_null(&self, row: usize) -> bool {
        match self {
            GeometryVector::PointVector(point_vector) => point_vector.array.is_null(row),
        }
    }

    fn slice(&self, offset: usize, length: usize) -> super::VectorRef {
        todo!()
    }

    fn get(&self, index: usize) -> crate::value::Value {
        todo!()
    }

    fn get_ref(&self, index: usize) -> crate::value::ValueRef {
        todo!()
    }
}

impl ScalarVector for GeometryVector {
    type OwnedItem = GeometryValue;

    type RefItem<'a> = &'a GeometryValue;

    type Iter<'a> = GeometryVectorIter<'a>;

    type Builder = GeometryVectorBuilder;

    fn get_data(&self, idx: usize) -> Option<Self::RefItem<'_>> {
        todo!()
    }

    fn iter_data(&self) -> Self::Iter<'_> {
        todo!()
    }
}

pub struct GeometryVectorIter<'a> {
    vector: &'a GeometryVector,
}

impl<'a> Iterator for GeometryVectorIter<'a> {
    type Item = Option<&'a GeometryValue>;
    fn next(&mut self) -> Option<Self::Item> {
        todo!()
    }
}

pub enum GeometryVectorBuilder {
    PointVectorBuilder(PointVectorBuilder),
}

impl MutableVector for GeometryVectorBuilder {
    fn data_type(&self) -> crate::data_type::ConcreteDataType {
        ConcreteDataType::geometry_datatype()
    }

    fn len(&self) -> usize {
        match self {
            GeometryVectorBuilder::PointVectorBuilder(builder) => builder.array_x.len(),
        }
    }

    fn as_any(&self) -> &dyn std::any::Any {
        self
    }

    fn as_mut_any(&mut self) -> &mut dyn std::any::Any {
        self
    }

    fn to_vector(&mut self) -> super::VectorRef {
        Arc::new(self.finish())
    }

    fn push_value_ref(&mut self, value: crate::value::ValueRef) -> crate::Result<()> {
        match value {
            crate::value::ValueRef::Geometry(value) => {
                self.push(Some(value));
                Ok(())
            }
            _ => todo!(),
        }
    }

    fn extend_slice_of(
        &mut self,
        vector: &dyn Vector,
        offset: usize,
        length: usize,
    ) -> crate::Result<()> {
        todo!()
    }
}

impl ScalarVectorBuilder for GeometryVectorBuilder {
    type VectorType = GeometryVector;

    fn with_capacity(capacity: usize) -> Self {
        todo!()
    }

    fn push(&mut self, value: Option<<Self::VectorType as ScalarVector>::RefItem<'_>>) {
        match self {
            GeometryVectorBuilder::PointVectorBuilder(builder) => builder.push(value),
        }
    }

    fn finish(&mut self) -> Self::VectorType {
        match self {
            GeometryVectorBuilder::PointVectorBuilder(builder) => {
                GeometryVector::PointVector(builder.finish())
            }
        }
    }
}

impl Serializable for GeometryVector {
    fn serialize_to_json(&self) -> crate::Result<Vec<serde_json::Value>> {
        todo!()
    }
}