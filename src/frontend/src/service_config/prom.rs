// Copyright 2023 Greptime Team
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

use serde::{Deserialize, Serialize};

#[derive(Clone, Debug, Serialize, Deserialize)]
pub struct PromOptions {
    pub addr: String,
}

impl Default for PromOptions {
    fn default() -> Self {
        Self {
            addr: "127.0.0.1:4004".to_string(),
        }
    }
}

#[cfg(test)]
mod tests {
    use super::PromOptions;

    #[test]
    fn test_prometheus_options() {
        let default = PromOptions::default();
        assert_eq!(default.addr, "127.0.0.1:4004".to_string());
    }
}
